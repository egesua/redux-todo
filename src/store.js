import { configureStore, combileReducers, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const reducer = combileReducers({
    //this contains all reducers.
});

const initialState = {}

const middleware = [thunk];

export const store = configureStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);