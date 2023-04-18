import axios from "axios";
import {
  setProducts,
  setLoading,
  setError,
  setProduct,
} from "../slices/products";

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await axios.get("/api/products");
    // localhost:5000 added as a proxy in package.json file
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error, Please try it later."
      )
    );
  }
};


export const getProduct = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(data))
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error, Please try it later."
      )
    );
    
  }
}