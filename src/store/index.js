import { configureStore } from "@reduxjs/toolkit";
import autoReducer from "./autoReducer";

export const store = configureStore({
    devTools: true,
    reducer: {
        auto: autoReducer
    }
})