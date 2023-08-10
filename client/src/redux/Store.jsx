import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./NewsSlice";

export const Store = configureStore({
    reducer:{
        news:newsReducer
    }
})