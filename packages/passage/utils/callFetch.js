const fetchRetry = require('fetch-retry')(fetch);
const browserFruit = require('../fruit/browser');
const nodeFruit = require('../fruit');

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
const callFetch = ({ path, options, retries = 0, config }) => {
    const controller = new AbortController();
    const fruit = config.environment === 'browser' ? browserFruit : nodeFruit;
    const rethrow = config.rethrow ?? false;
    let response, hasError;

    //If the timer runs out, abort the call.
    setTimeout(() => controller.abort(), config.timer);

    response = fetchRetry(config.baseURL + path, {
        ...options,
        headers: options?.headers ?? { 'Content-type': 'application/json' },
        body: options.body ? JSON.stringify(options.body) : undefined,
        signal: controller.signal,
    })
        .then((res) => {
            if (res.ok) {
                return convertBody(res);
            }
            if (retries > 0) {
                fruit.banana(`retrying ${path}`);
                return callFetch({ path, options, retries: retries - 1 });
            }
            return convertBody(res);
        })
        .catch((error) => {
            fruit.cherror('callFetch', error);
            hasError = true;
            if (retries > 0) {
                return callFetch({ path, options, retries: retries - 1 });
            }
            return error;
        });

    if (rethrow && hasError) {
        throw response;
    }
    return response;
};

module.exports = callFetch;
