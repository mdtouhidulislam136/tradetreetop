import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";

const reducer = combineReducers({
  products, // product added in this store
});

export default configureStore({
  reducer,
});
