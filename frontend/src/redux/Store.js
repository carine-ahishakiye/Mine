// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"; // Reducer for the cart feature
import { authApi } from "./features/auth/authApi"; // RTK Query for auth API
import authReducer from "./features/auth/authSlice"; // Reducer for handling auth state

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart state is managed here
    auth: authReducer, // Auth state is managed here
    [authApi.reducerPath]: authApi.reducer, // RTK Query API slice for auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // Adding RTK Query middleware for authApi
});

export default store;
