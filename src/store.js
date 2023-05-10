import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsApi } from "./features/apiSlice";
export const store = configureStore({
    // reducer is an object that contains all of the slice reducers that we want to include in our store.
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});