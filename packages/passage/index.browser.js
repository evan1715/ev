const base64ToBlob = require('./utils/base64ToBlob');
const bodyConverter = require('./utils/bodyConverter');
const delay = require('./utils/delay');
const errorToString = require('./utils/errorToString');
const fetcher = require('./utils/callFetch');
const fruit = require('./fruit');
const store = require('./store');
const tokens = require('./tokens');

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg);

module.exports = {
    base64ToBlob,
    bodyConverter,
    callFetch,
    delay,
    errorToString,
    ...fruit,
    ...store,
    ...tokens,
};
