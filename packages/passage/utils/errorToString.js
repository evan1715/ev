/**
 * Basic converter to convert an error to a string.
 * If it's already a string, it'll return as a string.
 * If it's an error, it'll return the error.message.
 * If it's an object, it'll return the JSON.stringify of the object.
 * It'll return an empty string if it's anything else.
 * If you need something like the error code, you'll have to handle that manually.
 * @param {any|unknown} error
 * @returns {string}
 */
const errorToString = (error) => {
    let hasError = '';
    try {
        if (error instanceof Error) {
            hasError = error.message;
        } else if (typeof error === 'object') {
            hasError = JSON.stringify(error);
        } else if (typeof error === 'string') {
            hasError = error;
        }
        return hasError;
    } catch (error) {
        return '';
    }
};

module.exports = errorToString;
