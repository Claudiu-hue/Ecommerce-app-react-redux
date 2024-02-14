import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
