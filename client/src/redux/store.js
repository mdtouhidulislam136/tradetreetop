import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
import cart from "./slices/cart";

const reducer = combineReducers({
  products,
  cart // product added in this store
});

export default configureStore({
  reducer,
});
