import processData from '../utils/processData.js';

/** @param {object[]} data - Array of recipe objects belonging to the viewed user. */
const profileRecipesAction = (data) => {
    const recipes = processData(data);

    return {
        type: 'PROFILE_RECIPES',
        recipes: recipes,
    };
};

/** @param {object} user - The public user profile object. */
const profileUserAction = (user) => ({
    type: 'PROFILE_USER',
    user: user,
});

//CLEAR_PROFILE
const clearProfileAction = () => ({
    type: 'CLEAR_PROFILE',
});

export { profileRecipesAction, profileUserAction, clearProfileAction };
