/**
 * @typedef {function} fetchRetry
 * @param {RequestInfo | URL} input - The URL or request object.
 * @param {import('fetch-retry').RequestInitRetryParams<fetch>} init - The options for the fetch call.
 */
import fetchRetry from 'fetch-retry';
import * as fruit from '../fruit/index.browser.js';

/** @type {fetchRetry} */
// @ts-ignore
const fetchWithRetry = fetchRetry(fetch);

/**
 * If there's a body, convert it. If it throws an error, then it didn't have a body.
 * @param {Response} res - The response from the API call.
 * @returns {Promise<(object|string)>} - The response from the API call.
 * @throws {Response} - The response from the API call.
 */
// const convertBody = (res) => res.json().catch(() => res);

/**
 * @typedef {object} CallFetchConfig - The config object.
 * @property {string} baseURL - The base URL for the API.
 * @property {number} [timer=20000] - Timeout in ms.
 * @property {boolean} [rethrow=true] - Whether to rethrow errors after logging.
 */

/**
 * @typedef {object} CallFetchArgs
 * @property {string} path - Path to the resource, e.g. "/user/login".
 * @property {RequestInit} options - Fetch options (method, headers, body, etc.).
 * @property {CallFetchConfig} config - Config object.
 * @property {number} [retries=0] - Number of additional logical retries on failure.
 */

/**
 * Normalize body + headers:
 * - If body is a plain object, JSON stringify it and set Content-Type if needed.
 * - Leave other body types (FormData, Blob, string, etc.) alone.
 * @param {RequestInit} [options]
 * @returns {RequestInit}
 */
const normalizeRequestOptions = (options = {}) => {
    const appJson = 'application/json';
    const headers = new Headers(options.headers ?? {});
    const bodyTypes = [FormData, URLSearchParams, Blob, ArrayBuffer];
    let body = options.body;

    const isPlainObject =
        body &&
        typeof body === 'object' &&
        !bodyTypes.some((Type) => body instanceof Type) &&
        !ArrayBuffer.isView(body);

    if (isPlainObject) {
        body = JSON.stringify(body);
        if (!headers.has('content-type')) {
            headers.set('content-type', appJson);
        }
    }

    return { ...options, headers, body };
};

/**
 * This is where the actual fetch call is made.
 * @param {object} arg - The deconstructed object.
 * @param {string} arg.path - The path to the desired API call like /user/login.
 * @param {RequestInit} arg.options - The options for the fetch call.
 * @param {object} arg.config - The config object.
 * @param {string} arg.config.baseURL - The base URL for the API.
 * @param {number} [arg.config.timer=20000] - The timer for the fetch call. Default is 20000 (optional).
 * @param {boolean} [arg.config.rethrow=true] - Whether to rethrow the error. Default is true (optional).
 * @param {number} [arg.retries=0] - The number of times to retry the call (optional).
 */
const callFetch = async ({ path, options, retries = 0, config }) => {
    const appJson = 'application/json';
    const { rethrow = true, timer = 20000 } = config ?? {};
    const normalizedReqOptions = normalizeRequestOptions(options);

    try {
        const res = await fetchWithRetry(config.baseURL + path, {
            ...normalizedReqOptions,
            signal: AbortSignal.timeout(timer),
            //fetch-retry options
            retryDelay: 500,
            /* retries automatically 3 times if the network itself fails with fetch-retry.
             * don't need to set it here. */
            // retries: 3,
        });
        const contentType = res.headers.get('content-type')?.trim();
        const contentLength = res.headers.get('content-length')?.trim();
        let data;

        if (contentType?.includes(appJson)) {
            data = await res.json().catch(() => null);
        } else if (contentType?.includes('text') && contentLength !== '0') {
            data = await res.text();
        } else {
            data = res;
        }

        if (!res.ok) {
            const errorMessage = data.error || data.statusText || String(data);
            throw new Error(errorMessage);
        }
        return data;
    } catch (error) {
        fruit.cherror('callFetch', error);
        if (retries > 0) {
            fruit.banana(`retrying ${path}`);
            return callFetch({ path, options, retries: retries - 1, config });
        } else if (rethrow) {
            throw error;
        }
        return error;
    }
};

export default callFetch;
