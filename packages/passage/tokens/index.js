import parseNum from '../utils/parseNum.js';
import callFetch from '../utils/callFetch.js';

const accessKey = 'act';
const accessExpKey = 'act_exp';
const refreshKey = 'rft';
const refreshExpKey = 'rft_exp';
const sixtyMinutes = 3600000; //3600000 = 60 minutes

/**
 * @typedef {object} Tokens
 * @property {string} access - The access token.
 * @property {string} accessExp - The access token expiration time.
 * @property {string} refresh - The refresh token.
 * @property {string} refreshExp - The refresh token expiration time.
 */

/*============================================
        Saving, Reading, Writing Tokens
==============================================*/

/**
 * Saves the access and refresh tokens to localStorage.
 * @param {object} tokens - The access and refresh tokens.
 * @param {string} tokens.access - The access token.
 * @param {string} [tokens.refresh] - The refresh token.
 */
const saveTokens = (tokens) => {
    const rightMeow = Date.now();
    const ninetyDays = rightMeow + 7776000000;
    const nowPlusSixty = rightMeow + sixtyMinutes;
    const acc_t = tokens.access;
    const acc_e = nowPlusSixty.toString();
    const ref_t = tokens.refresh;
    const ref_e = ninetyDays.toString();

    if (acc_t && ref_t) {
        localStorage.setItem(accessKey, acc_t);
        localStorage.setItem(accessExpKey, acc_e);
        localStorage.setItem(refreshKey, ref_t);
        localStorage.setItem(refreshExpKey, ref_e);
    } else if (!ref_t && acc_t) {
        localStorage.setItem(accessKey, acc_t);
        localStorage.setItem(accessExpKey, acc_e);
    }
};

/**
 * Reads the access and refresh tokens from localStorage.
 */
const readTokens = () => ({
    access: localStorage.getItem(accessKey) || '',
    accessExp: localStorage.getItem(accessExpKey) || '',
    refresh: localStorage.getItem(refreshKey) || '',
    refreshExp: localStorage.getItem(refreshExpKey) || '',
});

/**
 * Removes the access and refresh tokens from localStorage.
 */
const removeTokens = () => {
    localStorage.removeItem(accessKey);
    localStorage.removeItem(accessExpKey);
    localStorage.removeItem(refreshKey);
    localStorage.removeItem(refreshExpKey);
};

/** @type {Promise<Tokens | null> | null} */
let refreshPromise = null;

/**
 * Retrieve the tokens from storage. It is called automatically by
 * the API call function. It will refresh the token as needed.
 * @param {import('../utils/callFetch.js').CallFetchConfig} fetchConfig
 */
const getTokens = async (fetchConfig) => {
    const tokens = readTokens();
    const rightMeow = Date.now();
    const accessExp = parseNum(tokens.accessExp);

    //If access token is valid, return it.
    if (tokens.access && accessExp !== null && rightMeow < accessExp) {
        return tokens;
    } else if (!tokens.refresh) {
        return tokens;
    }

    //Hold off on the other potential calls until this goes through.
    if (refreshPromise) {
        await refreshPromise;
        return readTokens();
    }

    //This will suspend other calls until the refresh is complete.
    refreshPromise = callFetch({
        config: fetchConfig,
        path: '/auth/token',
        options: {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ refresh: tokens.refresh }),
        },
    })
        .then((response) => {
            if (response?.tokens) {
                saveTokens(response.tokens);
                return response.tokens;
            }
            return null;
        })
        .catch(() => null)
        .finally(() => (refreshPromise = null));

    await refreshPromise;
    return readTokens();
};

export { saveTokens, readTokens, removeTokens, getTokens };
