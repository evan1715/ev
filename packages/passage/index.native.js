import base64ToBlob from './utils/base64ToBlob';
import bodyConverter from './utils/bodyConverter';
import calculateBroadcastAddress from './utils/calculateBroadcastAddress';
import delay from './utils/delay';
import errorToString from './utils/errorToString';
import fetcher from './utils/callFetch';
import fruit from './fruit';
import * as store from './store';
import * as tokens from './tokens';

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg);

const passage = {
    base64ToBlob,
    bodyConverter,
    calculateBroadcastAddress,
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
    calculateBroadcastAddress,
    callFetch,
    delay,
    errorToString,
    fruit,
    store,
    tokens,
};
