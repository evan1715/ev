import * as fruit from './fruit';
import * as store from './store';
import * as tokens from './tokens';
import base64ToBlob from './utils/base64ToBlob';
import bodyConverter from './utils/bodyConverter';
import calculateBroadcastAddress from './utils/calculateBroadcastAddress';
import fetcher from './utils/callFetch';
import delay from './utils/delay';
import errorToString from './utils/errorToString';
import parseNum from './utils/parseNum';

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg);

const passage = {
    base64ToBlob,
    bodyConverter,
    calculateBroadcastAddress,
    callFetch,
    delay,
    errorToString,
    parseNum,
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
    parseNum,
    store,
    tokens,
};
