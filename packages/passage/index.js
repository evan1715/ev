const base64ToBlob = require('./utils/base64ToBlob');
const bodyConverter = require('./utils/bodyConverter');
const delay = require('./utils/delay');
const fetcher = require('./utils/callFetch');
const fruit = require('./fruit/node');
const httpLogger = require('./fruit/httpLogger');

/** @type {import('./utils/callFetch')} */
const callFetch = (arg) => fetcher(arg, 'node');

module.exports = { base64ToBlob, bodyConverter, delay, ...fruit, httpLogger, callFetch };
