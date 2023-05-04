import axios from "axios";
import {
  setProducts,
  setLoading,
  setError,
  productReviewed,
  resetError,
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
    dispatch(setProduct(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const createProductReview =
  (productId, userId, comment, rating, title) => async (dispatch, getState) => {
    dispatch(setLoading());
    const {
      user: { userInfo },
    } = getState();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/products/reviews/${productId}`,
        { comment, userId, rating, title },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch(productReviewed());
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "An unexpected error has occured. Please try again later."
        )
      );
    }
  };

export const resetProductError = () => async (dispatch) => {
  dispatch(resetError());
};
