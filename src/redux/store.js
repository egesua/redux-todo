import { createStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers";


const store = createStore(todoReducer);

export default store;
