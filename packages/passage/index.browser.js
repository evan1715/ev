const base64ToBlob = require('./utils/base64ToBlob');
const bodyConverter = require('./utils/bodyConverter');
const delay = require('./utils/delay');
const fetcher = require('./utils/callFetch');
const fruit = require('./fruit/browser');
const store = require('./store');
const tokens = require('./tokens/tokens');

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg, 'browser');

module.exports = {
    base64ToBlob,
    bodyConverter,
    callFetch,
    delay,
    ...fruit,
    ...store,
    ...tokens,
};
