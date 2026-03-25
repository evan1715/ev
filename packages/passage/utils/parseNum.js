/**
 * Parses an unknown value into a number or null.
 * @param {unknown} num - The value to parse.
 * @returns {number|null} - The parsed number or null if it cannot be parsed.
 */
const parseNum = (num) => {
    if (num === null || num === undefined || typeof num === 'object') {
        return null;
    }
    if (typeof num === 'number') {
        return num;
    }
    if (typeof num === 'string') {
        const n = Number(num);
        return Number.isNaN(n) ? null : n;
    }
    return null;
};

export default parseNum;
