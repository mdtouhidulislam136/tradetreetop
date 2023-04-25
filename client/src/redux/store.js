import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
import cart from "./slices/cart";
import user from "./slices/user";

const reducer = combineReducers({
  products,
  cart,
  user, // product added in this store
});

export default configureStore({
  reducer,
});
