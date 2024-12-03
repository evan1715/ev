import base64ToBlob from './utils/base64ToBlob.js';
import bodyConverter from './utils/bodyConverter.js';
import delay from './utils/delay.js';
import errorToString from './utils/errorToString.js';
import fetcher from './utils/callFetch.js';
import * as fruit from './fruit/index.browser.js';
import * as store from './store/index.js';
import * as tokens from './tokens/index.js';

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg);

const passage = {
    base64ToBlob,
    bodyConverter,
    callFetch,
    delay,
    errorToString,
    ...fruit,
    ...store,
    ...tokens,
};

export {
    passage as default,
    base64ToBlob,
    bodyConverter,
    callFetch,
    delay,
    errorToString,
    fruit,
    store,
    tokens,
};
