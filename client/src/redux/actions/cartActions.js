import axios from "axios";
import { setLoading, setError, cartItemAdd } from "../slices/cart";

export const addCartItem = (id, quantity) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { data } = await axios.get(`/api/products/${id}`);
        const itemToAdd = {
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            quantity,
        };
        dispatch(cartItemAdd(itemToAdd));
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