import { createAction, createReducer } from '@reduxjs/toolkit';
import bodyConverter from '../utils/bodyConverter';

const error = createAction('ERROR');
const clearError = createAction('CLEAR_ERROR');
/** @type {import('@reduxjs/toolkit').ActionCreatorWithPayload<{ loadingCode: string|number|null, loadingMsg: string|number|null, loadingScope: number, loadingType: string }> }>} */
const showLoading = createAction('SHOW_LOADING');
const hideLoading = createAction('HIDE_LOADING');
const processing = createAction('PROCESSING');
const processed = createAction('PROCESSED');
const resetPassage = createAction('RESET_PASSAGE');
/** @type {import('@reduxjs/toolkit').ActionCreatorWithPayload<string>} */
const toast = createAction('TOAST');
const clearToast = createAction('CLEAR_TOAST');

/**
 * Initial state for the reducer.
 * @typedef {object} PassageInitialState
 * @property {null|string} error
 * @property {boolean} loading
 * @property {string|number|null} loadingCode
 * @property {string|number|null} loadingMsg
 * @property {number} loadingScope
 * @property {string} loadingType
 * @property {boolean} processing
 * @property {boolean} toast
 * @property {string|null} toastMsg
 */

/** @type {PassageInitialState} */
const initialState = {
    error: null,
    loading: false,
    loadingCode: null,
    loadingMsg: null,
    loadingScope: 0.6,
    loadingType: 'default',
    processing: false,
    toast: false,
    toastMsg: null,
};

const passageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(error, (state, action) => ({
            ...initialState,
            error: bodyConverter(action.payload),
        }))
        .addCase(clearError, (state) => ({
            ...state,
            error: initialState.error,
        }))
        .addCase(showLoading, (state, { payload: action }) => ({
            ...state,
            loading: true,
            loadingCode: action.loadingCode ? action.loadingCode : initialState.loadingCode,
            loadingMsg: action.loadingMsg ? action.loadingMsg : initialState.loadingMsg,
            loadingScope: action.loadingScope ? action.loadingScope : initialState.loadingScope,
            loadingType: action.loadingType ? action.loadingType : initialState.loadingType,
            processing: true,
        }))
        .addCase(hideLoading, (state) => ({
            ...state,
            loading: initialState.loading,
            loadingCode: initialState.loadingCode,
            loadingMsg: initialState.loadingMsg,
            loadingScope: initialState.loadingScope,
            loadingType: initialState.loadingType,
            processing: false,
        }))
        .addCase(toast, (state, action) => ({
            ...state,
            toast: true,
            toastMsg: action.payload,
        }))
        .addCase(clearToast, (state) => ({
            ...state,
            toast: false,
            toastMsg: initialState.toastMsg,
        }))
        .addCase(processing, (state) => ({
            ...state,
            processing: true,
        }))
        .addCase(processed, (state) => ({
            ...state,
            processing: initialState.processing,
        }))
        .addCase(resetPassage, () => initialState);
});

export {
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
    passageReducer as default,
};
