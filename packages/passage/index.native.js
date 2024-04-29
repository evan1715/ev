import base64ToBlob from './utils/base64ToBlob';
import bodyConverter from './utils/bodyConverter';
import delay from './utils/delay';
import fetcher from './utils/callFetch';
import fruit from './fruit/node';
import * as store from './store';
import * as tokens from './tokens/tokens.native';

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg, 'node');

const passage = {
    base64ToBlob,
    bodyConverter,
    callFetch,
    delay,
    ...fruit,
    ...store,
    ...tokens,
};

export { passage as default, base64ToBlob, bodyConverter, delay, fruit, store, callFetch, tokens };
