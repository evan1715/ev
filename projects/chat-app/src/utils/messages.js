/**
 * @param {string} username
 * @param {string} text
 */
const generateMessage = (username, text) => {
    return {
        username: username,
        text: text,
        createdAt: new Date().getTime(),
    };
};

/**
 * @param {string} username
 * @param {string} url
 */
const generateLocationMessage = (username, url) => {
    return {
        username: username,
        url: url,
        createdAt: new Date().getTime(),
    };
};

export { generateMessage, generateLocationMessage };
