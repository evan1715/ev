import processData from '../utils/processData.js';

/** @param {object} data - A single recipe object from the server. */
const viewRecipeAction = (data) => {
    let recipe = data;

    if (data.pictures) {
        recipe = processData(data);
    }

    return {
        type: 'SELECTED_RECIPE',
        recipe,
    };
};

/** @param {object} recipe - The recipe to set for editing. */
const editRecipeAction = (recipe) => ({
    type: 'EDIT_RECIPE',
    recipe,
});

//CLEAR_SELECTED_RECIPE
const clearSelectedRecipeAction = () => ({
    type: 'CLEAR_SELECTED_RECIPE',
});

export { viewRecipeAction, editRecipeAction, clearSelectedRecipeAction };
