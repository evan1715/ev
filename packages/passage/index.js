const clunk = require('./utils/clunk');
const delay = require('./utils/delay');
const fruit = require('./fruit/node');
const store = require('./store');
const callFetch = require('./utils/callFetch');

module.exports = {
    clunk,
    delay,
    ...fruit,
    ...store,
    callFetch,
};
