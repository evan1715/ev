/**
 * Asynchronous delay
 * @param {number} ms - milliseconds
 * @returns {Promise<void>}
 */
const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = delay;
