const base64ToBlob = require('./utils/base64ToBlob');
const clunk = require('./utils/clunk');
const delay = require('./utils/delay');
const fruit = require('./fruit/node');
const store = require('./store');
const fetcher = require('./utils/callFetch');
const tokens = require('./tokens/tokens.native');

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg, 'node');

module.exports = {
    base64ToBlob,
    clunk,
    delay,
    ...fruit,
    ...store,
    callFetch,
    ...tokens,
};
