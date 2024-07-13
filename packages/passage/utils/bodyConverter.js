/** @typedef {string|number|object|undefined|null|unknown|any} body */

/**
 * Will convert the given argument as needed.
 *
 * Since an error is not enumerable like other created objects,
 * we have to check if it's an instanceof Error. If we let it
 * pass onto just typeof body === 'object', then it will return
 * as an empty object {}.
 *
 * Before we call JSON.stringify() on a variable, it must be
 * determined to be an object first so that we know it has the
 * prototype ability to be converted into a string.
 *
 * @param {body} body
 * @param {boolean} [noColon=false]
 * @returns {string}
 */
const bodyConverter = (body, noColon = false) => {
    let text = '';
    try {
        if (!body) {
            text = '';
        } else if (body instanceof Error) {
            // text = ': ' + JSON.stringify(body, Object.getOwnPropertyNames(body));
            text = ': ' + body.message;
        } else if (typeof body === 'object') {
            text = ': ' + JSON.stringify(body);
        } else {
            text = ': ' + body;
        }

        if (noColon && text.slice(0, 2) === ': ') {
            text = text.slice(2);
        }
        return text;
    } catch (error) {
        console.log('passage.bodyConverter', error);
        return 'Unable to convert body.';
    }
};

module.exports = bodyConverter;
