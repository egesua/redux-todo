import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import  {thunk}  from "redux-thunk";

const reducer = combineReducers({
    //this contains all reducers.
});

const initialState = {}

const middleware = [thunk];

const store = configureStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;