import processData from '../utils/processData.js';

//This file deals with user created recipes.

/** @param {object} data - The newly submitted recipe returned from the server. */
const submitRecipeAction = (data) => ({
    type: 'SUBMIT_RECIPE',
    recipe: data,
});

/** @param {object[]} data - Array of the authenticated user's recipe objects. */
const myRecipesAction = (data) => {
    const recipes = processData(data);

    return {
        type: 'MY_RECIPES',
        recipes,
    };
};

//DELETE_RECIPE
const deleteRecipeAction = () => ({
    type: 'DELETE_RECIPE',
});

//CLEAR_USER_RECIPES
const clearUserRecipesAction = () => ({
    type: 'CLEAR_USER_RECIPES',
});

export { submitRecipeAction, myRecipesAction, deleteRecipeAction, clearUserRecipesAction };
