import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
