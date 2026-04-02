import { loadingBarReducer } from 'react-redux-loading-bar';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { createLogger } from 'redux-logger';
import accountReducer from '../reducers/account.js';
import allRecipesReducer from '../reducers/allRecipes.js';
import recipeRoulette from '../reducers/recipe-roulette.js';
import selectedRecipeReducer from '../reducers/selectedRecipe.js';
import serverErrorReducer from '../reducers/serverError.js';
import userProfileReducer from '../reducers/userProfile.js';
import userRecipesReducer from '../reducers/userRecipes.js';
import thunk from './thunk.js';

/**
 * Added the Redux Devtools Extension for Firefox and Edge/Chrome.
 * So, with that, we needed to add an enhancer argument to utilize the tool in the browser.
 * @see http://extension.remotedev.io/
 */
const logger = createLogger({ collapsed: true });

/**
 * Creates and returns the configured Redux store.
 * @returns {import('redux').Store}
 */
const storeConfig = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        combineReducers({
            loadingBar: loadingBarReducer,
            allRecipesReducer,
            accountReducer,
            recipeRoulette,
            selectedRecipeReducer,
            serverErrorReducer,
            userProfileReducer,
            userRecipesReducer,
        }),
        composeEnhancers(applyMiddleware(logger, thunk))
    );
};

export default storeConfig;
