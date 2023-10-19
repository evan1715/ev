const base64ToBlob = require('./utils/base64ToBlob');
const delay = require('./utils/delay');
const fruit = require('./fruit/node');
const fetcher = require('./utils/callFetch');

const callFetch = (arg) => fetcher(arg, 'node');

module.exports = {
    base64ToBlob,
    delay,
    ...fruit,
    callFetch,
};
