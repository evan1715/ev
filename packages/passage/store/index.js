/**
 * @file store/index.js - The Redux store for the passage module.
 *
 * Logger middleware:
 * @see https://redux.js.org/api/applymiddleware#example-custom-logger-middleware
 * @see https://redux.js.org/usage/configuring-your-store#middlewareloggerjs
 *
 * @import { Middleware } from '@reduxjs/toolkit';
 */
import * as fruit from '../fruit';
import errorToString from '../utils/errorToString';
import bodyConverter from '../utils/bodyConverter';

/*============================================
                    Middleware
==============================================*/

/**
 * Avoid putting non-serializable values such as Promises, Symbols,
 * Maps/Sets, functions, or class instances into the Redux store
 * state or dispatched actions.
 * @see https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions
 * @param {any} value - The value to check
 * @returns {boolean} if the value is serializable
 */
function isSerializable(value) {
    try {
        JSON.stringify(value);
        return true;
    } catch {
        return false;
    }
}

/** @type {Middleware} */
const reduxLoggerMiddleware = (store) => (next) => (/** @type {any} */ action) => {
    const state = store.getState();
    const dispatch = store.dispatch;

    if (process.env.NODE_ENV === 'development') {
        console.log('dispatching', action.type);
    }

    if (action.type.endsWith('/rejected') && action.error) {
        const errorMsg = errorToString(action.payload);
        const { name, message /*,stack*/ } = action.error;
        let msg = message;

        // stack && passage.banana('Stacktrace:', stack);
        if (message === 'AbortError' && name) {
            msg = `${name}: ${message}`;
        } else if (message === 'Rejected' && action.payload) {
            msg = `${message}: ${action.payload}`;
            action.payload = errorMsg;
        }

        //Report the error to the console.
        fruit.cherror(action.type, msg);

        //Don't let non-serializable errors into the store.
        if (!isSerializable(action.payload)) {
            fruit.cherror('Payload non-serializable', action.payload);
            action.payload = '';
        }

        //If they have passage enabled, send the error to the passage store.
        if (state.passage) {
            dispatch(error(action.payload));
        }
    }
    return next(action);
};

/*============================================
                    Actions
==============================================*/

//Actions
/** @param {any} data */
const error = (data) => ({ type: 'ERROR', error: bodyConverter(data, true) });
const clearError = () => ({ type: 'CLEAR_ERROR' });
/** @param {any} [data] */
const showLoading = (data) => ({ type: 'SHOW_LOADING', ...data });
const hideLoading = () => ({ type: 'HIDE_LOADING' });
const processing = () => ({ type: 'PROCESSING' });
const processed = () => ({ type: 'PROCESSED' });
const resetPassage = () => ({ type: 'RESET_PASSAGE' });
const toast = (/** @type {{ toastMsg: string }} */ { toastMsg }) => ({ type: 'TOAST', toastMsg });

/*============================================
                    Reducer
==============================================*/

/**
 * Initial state for the reducer.
 * @typedef {object} PassageInitialState
 * @property {string} error
 * @property {boolean} loading
 * @property {string|number} loadingCode
 * @property {string} loadingMsg
 * @property {number} loadingScope
 * @property {string} loadingType
 * @property {boolean} processing
 * @property {boolean} toast
 * @property {string} toastMsg
 */

/** @type {PassageInitialState} */
const initialState = {
    error: '',
    loading: false,
    loadingCode: '',
    loadingMsg: '',
    loadingScope: 0.6,
    loadingType: 'default',
    processing: false,
    toast: false,
    toastMsg: '',
};

//Reducer
/** @param {typeof initialState} state */
const passageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...initialState,
                error: action.error,
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: initialState.error,
            };
        case 'SHOW_LOADING':
            return {
                ...state,
                error: initialState.error,
                loading: true,
                loadingCode: action.loadingCode ? action.loadingCode : initialState.loadingCode,
                loadingMsg: action.loadingMsg ? action.loadingMsg : initialState.loadingMsg,
                loadingScope: action.loadingScope ? action.loadingScope : initialState.loadingScope,
                loadingType: action.loadingType ? action.loadingType : initialState.loadingType,
                processing: true,
            };
        case 'HIDE_LOADING':
            return {
                ...state,
                loading: initialState.loading,
                loadingCode: initialState.loadingCode,
                loadingMsg: initialState.loadingMsg,
                loadingScope: initialState.loadingScope,
                loadingType: initialState.loadingType,
                processing: false,
            };
        case 'TOAST':
            return {
                ...state,
                toast: true,
                toastMsg: action.toastMsg,
            };
        case 'CLEAR_TOAST':
            return {
                ...state,
                toast: false,
                toastMsg: initialState.toastMsg,
            };
        case 'PROCESSING':
            return {
                ...state,
                processing: true,
            };
        case 'PROCESSED':
            return {
                ...state,
                processing: initialState.processing,
            };
        case 'RESET_PASSAGE':
            return initialState;
        default:
            return state;
    }
};

export {
    //Middleware
    reduxLoggerMiddleware,
    //Actions
    error,
    clearError,
    showLoading,
    hideLoading,
    resetPassage,
    toast,
    processing,
    processed,
    //Reducer
    passageReducer,
};
