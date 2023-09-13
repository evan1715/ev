const clunk = require('./utils/clunk');
const delay = require('./utils/delay');
const fruit = require('./fruit/node');
const store = require('./store');
const fetcher = require('./utils/callFetch');
const tokens = require('./tokens/tokens.native');

const callFetch = (arg) => fetcher(arg, 'node');

module.exports = {
    clunk,
    delay,
    ...fruit,
    ...store,
    callFetch,
    ...tokens,
};
