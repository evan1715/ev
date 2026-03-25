import httpLogger from './fruit/httpLogger.js';
import * as fruit from './fruit/index.js';
import * as store from './store/index.js';
import * as tokens from './tokens/index.js';
import base64ToBlob from './utils/base64ToBlob.js';
import bodyConverter from './utils/bodyConverter.js';
import calculateBroadcastAddress from './utils/calculateBroadcastAddress.js';
import fetcher from './utils/callFetch.js';
import delay from './utils/delay.js';
import errorToString from './utils/errorToString.js';
import parseNum from './utils/parseNum.js';

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg);

const passage = {
    base64ToBlob,
    bodyConverter,
    calculateBroadcastAddress,
    callFetch,
    delay,
    errorToString,
    httpLogger,
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
    httpLogger,
    parseNum,
    store,
    tokens,
};
