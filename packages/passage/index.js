const base64ToBlob = require('./utils/base64ToBlob');
const bodyConverter = require('./utils/bodyConverter');
const delay = require('./utils/delay');
const fruit = require('./fruit/node');
const httpLogger = require('./fruit/httpLogger');
const fetcher = require('./utils/callFetch');

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg, 'node');

module.exports = { base64ToBlob, bodyConverter, delay, ...fruit, httpLogger, callFetch };
