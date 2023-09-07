const fetchRetry = require('fetch-retry')(fetch);
const browserFruit = require('../fruit/browser');
const nodeFruit = require('../fruit');

let configuration = {
    baseURL: '',
    timer: 10000,
    environment: 'browser',
};

const configureFetch = (data) => {
    configuration = {
        ...configuration,
        baseURL: data?.baseURL || '',
        timer: data?.timer || 10000,
        environment: data?.environment || 'browser',
    };
};

//If there's a body, convert it. If it throws an error, then it didn't have a body.
const convertBody = (res) => res.json().catch(() => res);

//This is where the actual fetch call is made.
const callFetch = async ({ path, options, retries = 0 }) => {
    const controller = new AbortController();
    const fruit = configuration.environment === 'browser' ? browserFruit : nodeFruit;
    const url = configuration.baseURL;
    const timer = configuration.timer;
    const body = options?.body;
    let headers = options?.headers;

    headers = headers || { Authorization: headers?.token, 'Content-type': 'application/json' };

    //If the timer runs out, abort the call.
    setTimeout(() => controller.abort(), timer);

    return fetchRetry(url + path, {
        ...options,
        headers,
        body: body ? JSON.stringify(body) : undefined,
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

module.exports = { callFetch, configureFetch };
