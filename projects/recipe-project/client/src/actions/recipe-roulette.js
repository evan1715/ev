import { hideLoading, showLoading } from 'react-redux-loading-bar';

/**
 * Redux thunk that fetches random recipes from the Spoonacular API.
 * @param {string} url - The Spoonacular random recipes endpoint URL.
 * @param {number} number - How many random recipes to fetch.
 */
const handleRecipeRoulette = (url, number) => async (dispatch) => {
    dispatch(showLoading());

    try {
        const response = await (
            await fetch(url.concat(`?apiKey=3273002619e04c89b625192940c7dbb1&number=${number}`))
        ).json();
        const recipes = response.recipes;

        dispatch({ type: 'RECEIVE_RECIPE_ROULETTE', recipes });
        dispatch(hideLoading());
    } catch (error) {
        console.log(error);
        dispatch(hideLoading());
    }
};

export { handleRecipeRoulette as default };
