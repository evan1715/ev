const fetchRetry = require('fetch-retry')(fetch);
const browserFruit = require('../fruit/browser');
const nodeFruit = require('../fruit');

//If there's a body, convert it. If it throws an error, then it didn't have a body.
const convertBody = (res) => res.json().catch(() => res);

//This is where the actual fetch call is made.
const callFetch = async ({ path, options, retries = 0, config }) => {
    const controller = new AbortController();
    const fruit = config.environment === 'browser' ? browserFruit : nodeFruit;

    //If the timer runs out, abort the call.
    setTimeout(() => controller.abort(), config.timer);

    return fetchRetry(config.baseURL + path, {
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
            if (retries > 0) {
                return callFetch({ path, options, retries: retries - 1 });
            }
            return error;
        });
};

module.exports = callFetch;
