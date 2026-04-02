import dayjs from 'dayjs';

/**
 * Processes raw recipe data from the server:
 * - Formats createdAt/updatedAt dates with dayjs
 * - Converts picture buffers to base64 strings for display
 *
 * @param {object | object[]} data - A single recipe or array of recipes from the server.
 * @returns {object | object[]} The processed recipe data with formatted dates and base64 images.
 */
const processData = (data) => {
    const recipes = data;

    //If it's just one recipe, the length will be undefined, so only process it as one recipe.
    if (data.length === undefined) {
        recipes.createdAt = dayjs(recipes.createdAt).format('MMM D, YYYY');
        recipes.updatedAt = dayjs(recipes.updatedAt).format('MMM D, YYYY');
        for (let j = 0; j < data.pictures.length; j++) {
            const buffer = data.pictures[j].picture.data;
            const bytes = new Uint8Array(buffer);
            let binary = '';

            bytes.forEach((byte) => (binary += String.fromCharCode(byte)));

            recipes.pictures[j].picture.data = btoa(binary);
            recipes.pictures[j].picture.type = 'Binary';
        }
        return recipes;
    }
    // If it's an array of recipes, process all of them.
    for (let i = 0; i < data.length; i++) {
        recipes[i].createdAt = dayjs(recipes[i].createdAt).format('MMM D, YYYY');
        recipes[i].updatedAt = dayjs(recipes[i].updatedAt).format('MMM D, YYYY');
        for (let j = 0; j < data[i].pictures.length; j++) {
            const buffer = data[i].pictures[j].picture.data;
            const bytes = new Uint8Array(buffer);
            let binary = '';

            bytes.forEach((byte) => (binary += String.fromCharCode(byte)));

            recipes[i].pictures[j].picture.data = btoa(binary);
            recipes[i].pictures[j].picture.type = 'Binary';
        }
    }
    return recipes;
};

export { processData as default };
