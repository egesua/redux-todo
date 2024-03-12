import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers";
import { thunk } from "redux-thunk";


const store = createStore(
    todoReducer,
    applyMiddleware(thunk));

export default store;
