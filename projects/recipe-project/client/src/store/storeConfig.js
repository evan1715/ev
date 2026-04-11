import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from '@ev/react-redux-loading-bar';
import passage from '@ev/passage';
import accountReducer from '../reducers/account.js';
import allRecipesReducer from '../reducers/allRecipes.js';
import recipeRoulette from '../reducers/recipe-roulette.js';
import selectedRecipeReducer from '../reducers/selectedRecipe.js';
import serverErrorReducer from '../reducers/serverError.js';
import userProfileReducer from '../reducers/userProfile.js';
import userRecipesReducer from '../reducers/userRecipes.js';

/**
 * Creates and returns the configured Redux store.
 */
const storeConfig = configureStore({
    reducer: combineReducers({
        loadingBar: loadingBarReducer,
        allRecipesReducer,
        accountReducer,
        recipeRoulette,
        selectedRecipeReducer,
        serverErrorReducer,
        userProfileReducer,
        userRecipesReducer,
    }),
    middleware: (getDefaultMiddleware) => {
        const base = getDefaultMiddleware();

        if (process.env.NODE_ENV === 'development') {
            return base.concat(passage.reduxLoggerMiddleware);
        }
        return base;
    },
});

export default storeConfig;
