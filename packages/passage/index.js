const base64ToBlob = require('./utils/base64ToBlob');
const clunk = require('./utils/clunk');
const delay = require('./utils/delay');
const fruit = require('./fruit/node');
const httpLogger = require('./fruit/httpLogger');
const store = require('./store');
const fetcher = require('./utils/callFetch');

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg, 'node');

module.exports = { base64ToBlob, clunk, delay, ...fruit, httpLogger, ...store, callFetch };
