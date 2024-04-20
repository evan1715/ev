/**
 * Convert a base64 string to a Blob object.
 * @param {string} base64String - The base64 string to convert.
 * @param {string} mimeType - The MIME type of the Blob.
 * @returns {Blob} The Blob object.
 */
const base64ToBlob = (base64String, mimeType) => {
    const binaryString = atob(base64String);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type: mimeType });
};

module.exports = base64ToBlob;
