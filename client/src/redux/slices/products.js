import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { paload }) => {
      state.loading = false;
      state.error = null;
      state.products = paload;
    },
    setError: (state, { paload }) => {
      state.error = paload;
      state.loading = false;
    },
  },
});

export const { setLoading, setError, setProducts } = productSlice.actions;
export default productSlice.reducer;
export const productsSelector = (state) => state.products;
