const fetchRetry = require('fetch-retry')(fetch);
const browserFruit = require('../fruit/browser');
const nodeFruit = require('../fruit/node');

//If there's a body, convert it. If it throws an error, then it didn't have a body.
const convertBody = (res) => res.json().catch(() => res);

/**
 * This is where the actual fetch call is made.
 * @param {object} arg - The deconstructed object.
 *
 * @param {string} arg.path - The path to the desired API call like /user/login.
 *
 * @param {object} arg.options - The options for the fetch call.
 * @param {object} arg.options.headers - The headers for the fetch call.
 * @param {string} arg.options.method - GET, POST, PATCH, DELETE.
 * @param {object} [arg.options.body] - The body of the request (optional).
 *
 * @param {object} arg.config - The config object.
 * @param {string} arg.config.baseURL - The base URL for the API.
 * @param {number} [arg.config.timer=10000] - The timer for the fetch call. Default is 10000 (optional).
 * @param {string} arg.config.environment - The environment for the fetch call.
 * @param {boolean} [arg.config.rethrow=false] - Whether to rethrow the error. Default is false (optional).
 *
 * @param {number} [arg.retries=0] - The number of times to retry the call (optional).
 * @returns {Promise<(object|string)>} - The response from the API call.
 */
const callFetch = ({ path, options, retries = 0, config }, environment) => {
    const controller = new AbortController();
    const fruit = environment === 'browser' ? browserFruit : nodeFruit;
    const rethrow = config?.rethrow ?? false;
    const timer = config?.timer ?? 20000;

    //If the timer runs out, abort the call.
    setTimeout(() => controller.abort(), timer);

    return fetchRetry(config.baseURL + path, {
        ...options,
        headers: options?.headers ?? { 'Content-type': 'application/json' },
        body: options.body ? JSON.stringify(options.body) : undefined,
        signal: controller.signal,
        //fetch-retry options
        retryDelay: 500,
    })
        .then((res) => {
            if (res.ok) {
                return convertBody(res);
            } else if (retries > 0) {
                fruit.banana(`retrying ${path}`);
                return callFetch({ path, options, retries: retries - 1, config });
            }
            return convertBody(res);
        })
        .then((data) => {
            if (data.error) {
                throw new Error(data.error);
            } else if (data.ok === false && data.statusText) {
                throw new Error(data.statusText);
            } else if (data.ok === false) {
                throw new Error('API call failed.');
            }
            return data;
        })
        .catch((error) => {
            fruit.cherror('callFetch', error);
            if (retries > 0) {
                return callFetch({ path, options, retries: retries - 1, config });
            } else if (rethrow) {
                throw error;
            }
            return error;
        });
};

module.exports = callFetch;
