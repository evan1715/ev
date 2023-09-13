const accessKey = 'act';
const accessExpKey = 'act_exp';
const refreshKey = 'rft';
const refreshExpKey = 'rft_exp';
const twentyFiveMinutes = 1500000; //1500000 = 25 minutes

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
    const nowPlus25 = rightMeow + twentyFiveMinutes;
    const acc_t = tokens.access;
    const acc_e = nowPlus25.toString();
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
 * @returns {object} - The access and refresh tokens.
 */
const readTokens = () => ({
    access: localStorage.getItem(accessKey),
    accessExp: localStorage.getItem(accessExpKey),
    refresh: localStorage.getItem(refreshKey),
    refreshExp: localStorage.getItem(refreshExpKey),
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

module.exports = {
    saveTokens,
    readTokens,
    removeTokens,
};
