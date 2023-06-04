import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Api } from "../services/api";
import { Admin } from "../services/admin";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]:Api.reducer,
        [Admin.reducerPath]:Admin.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Api.middleware).concat(Admin.middleware),
})
setupListeners(store.dispatch)