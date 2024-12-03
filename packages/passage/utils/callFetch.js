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
 * This is where the actual fetch call is made.
 * @param {object} arg - The deconstructed object.
 *
 * @param {string} arg.path - The path to the desired API call like /user/login.
 *
 * @param {object} arg.options - The options for the fetch call.
 * @param {HeadersInit} arg.options.headers - The headers for the fetch call.
 * @param {string} arg.options.method - GET, POST, PATCH, DELETE.
 * @param {object|BodyInit|null|undefined} [arg.options.body] - The body of the request (optional).
 *
 * @param {object} arg.config - The config object.
 * @param {string} arg.config.baseURL - The base URL for the API.
 * @param {number} [arg.config.timer=20000] - The timer for the fetch call. Default is 20000 (optional).
 * @param {boolean} [arg.config.rethrow=true] - Whether to rethrow the error. Default is true (optional).
 * @param {number} [arg.retries=0] - The number of times to retry the call (optional).
 */
const callFetch = ({ path, options, retries = 0, config }) => {
    const controller = new AbortController();
    const appJson = 'application/json';
    const { rethrow = true, timer = 20000 } = config ?? {};

    //If the timer runs out, abort the call.
    setTimeout(() => controller.abort(), timer);

    return fetchWithRetry(config.baseURL + path, {
        ...options,
        headers: options?.headers ?? { 'Content-type': appJson },
        body: options.body ? JSON.stringify(options.body) : undefined,
        signal: controller.signal,
        //fetch-retry options
        retryDelay: 500,
        /* retries automatically 3 times if the network itself fails with fetch-retry.
         * don't need to set it here. */
        // retries: 3,
    })
        .then(async (/** @type {Response} */ res) => {
            const contentType = res.headers.get('content-type')?.trim();
            const contentLength = res.headers.get('content-length')?.trim();
            let data;

            if (contentType?.includes(appJson)) {
                data = await res.json();
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
        })
        .catch((/** @type {any} */ error) => {
            fruit.cherror('callFetch', error);
            if (retries > 0) {
                fruit.banana(`retrying ${path}`);
                return callFetch({ path, options, retries: retries - 1, config });
            } else if (rethrow) {
                throw error;
            }
            return error;
        });
};

export default callFetch;
