const base64ToBlob = require('./utils/base64ToBlob');
const delay = require('./utils/delay');
const fruit = require('./fruit/browser');
const store = require('./store');
const fetcher = require('./utils/callFetch');
const tokens = require('./tokens/tokens');

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg, 'browser');

module.exports = {
    base64ToBlob,
    delay,
    ...fruit,
    ...store,
    callFetch,
    ...tokens,
};
