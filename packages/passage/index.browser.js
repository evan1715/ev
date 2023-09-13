const clunk = require('./utils/clunk');
const delay = require('./utils/delay');
const fruit = require('./fruit/browser');
const store = require('./store');
const fetcher = require('./utils/callFetch');
const tokens = require('./tokens/tokens');

const callFetch = (arg) => fetcher(arg, 'browser');

module.exports = {
    clunk,
    delay,
    ...fruit,
    ...store,
    callFetch,
    ...tokens,
};
