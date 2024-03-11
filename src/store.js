import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
    
});

const initialState = {};

const store = configureStore({
    reducer,
    preloadedState: initialState
});

export default store;
