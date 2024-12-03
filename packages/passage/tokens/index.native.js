/**
 * Async Storage docs - @see https://react-native-async-storage.github.io/async-storage/docs/api
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as fruit from '../fruit/index';

const accessKey = 'act';
const accessExpKey = 'act_exp';
const refreshKey = 'rft';
const refreshExpKey = 'rft_exp';
const sixtyMinutes = 3600000; //3600000 = 60 minutes

/*============================================
        Saving, Reading, Writing Tokens
==============================================*/

/**
 * Saves the access and refresh tokens to AsyncStorage.
 * @param {object} tokens - The access and refresh tokens.
 * @param {string} tokens.access - The access token.
 * @param {string} [tokens.refresh] - The refresh token.
 */
const saveTokens = async (tokens) => {
    const rightMeow = Date.now();
    const ninetyDays = rightMeow + 7776000000;
    const nowPlusSixty = rightMeow + sixtyMinutes;
    const { access, refresh } = tokens;
    const acc_t = [accessKey, access];
    const acc_e = [accessExpKey, nowPlusSixty.toString()];
    const ref_t = [refreshKey, refresh];
    const ref_e = [refreshExpKey, ninetyDays.toString()];

    try {
        if (access && refresh) {
            await AsyncStorage.multiSet([acc_t, acc_e, ref_t, ref_e]);
        } else if (!refresh && access) {
            await AsyncStorage.multiSet([acc_t, acc_e]);
        }
    } catch (error) {
        fruit.cherror('saveTokens', error);
    }
};

/**
 * Reads the access and refresh tokens from AsyncStorage.
 * @returns {Promise<{ [key: string]: string|null }>} - The access and refresh tokens.
 */
const readTokens = async () => {
    try {
        const values = await AsyncStorage.multiGet([accessKey, accessExpKey, refreshKey, refreshExpKey]);

        return {
            access: values[0]?.[1] ?? '',
            accessExp: values[1]?.[1] || '',
            refresh: values[2]?.[1] || '',
            refreshExp: values[3]?.[1] || '',
        };
    } catch (error) {
        fruit.cherror('readTokens', error);
        return {};
    }
};

/**
 * Removes the access and refresh tokens from AsyncStorage.
 */
const removeTokens = async () => {
    try {
        await AsyncStorage.multiRemove([accessKey, accessExpKey, refreshKey, refreshExpKey]);
    } catch (error) {
        fruit.cherror('removeTokens', error);
    }
};

export { saveTokens, readTokens, removeTokens };
