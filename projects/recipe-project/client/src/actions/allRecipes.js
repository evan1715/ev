import processData from '../utils/processData.js';

//This file deals with all recipes.

/** @param {object[]} data - Raw array of recipe objects from the server. */
const allRecipesAction = (data) => {
    const recipes = processData(data);

    return {
        type: 'ALL_RECIPES',
        recipes,
    };
};

/** @param {string[]} usernames - Array of owner usernames matching recipe order. */
const recipeOwnersAction = (usernames) => ({
    type: 'RECIPE_OWNERS',
    usernames,
});

/** @param {object | object[]} data - Search result data from Spoonacular or server. */
const searchResultsAction = (data) => {
    let recipes = data;

    if (data.pictures) {
        recipes = processData(data);
    }

    return {
        type: 'SEARCH_RESULTS',
        recipes,
    };
};

export { allRecipesAction, recipeOwnersAction, searchResultsAction };
