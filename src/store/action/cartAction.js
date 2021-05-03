import axios from "axios";
import { ActionTypes } from "../types";
import { BASE_URL } from "../../static";

export const addToCart = (product) => async (dispatch, getStore) => {
  // Here add cart api is calling .when user is login then product added to cart succesfullly 
  const { token } = getStore().sessionStore;
  axios
    .post(
      BASE_URL + "/cart",
      {
        product: {
          id: product._id,
          quantity: 1,
        },
      },
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(
        storeNotification({
          message: "Added new product",
          type: "SUCCESS",
          display: true,
        })
      );
      dispatch(getCartInfo());
    })
    .catch((e) => {
      dispatch(
        storeNotification({
          message: e.response.data.error,
          type: "FAILED",
          display: true,
        })
      );
    });
};

export const getCartInfo = () => async (dispatch, getStore) => {
  // Here Add_to_cart functionaly successfully then read the cart data
  const { token } = getStore().sessionStore;

  let { data } = await axios.get(BASE_URL + "/cart", {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  dispatch(getCart(data));
};

export const checkoutOrder = () => async (dispatch, getStore) => {
  const { token } = getStore().sessionStore;
  // When user product added succesfully on cart then he will checkout order

  let { data } = await axios.get(BASE_URL + "/order/checkout", {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  dispatch(getCartInfo());
};

const getCart = (data) => {
  // Here product added on array on products array
  if (data.products) {
    return {
      type: ActionTypes.GET_CART_INFO,
      payload: data,
    };
  } else {
    return {
      type: ActionTypes.GET_CART_INFO,
      payload: {
        products: [],
      },
    };
  }
};

const storeNotification = (data) => {
  // Here create a function that is show notification 
  return {
    type: ActionTypes.ADD_NEW_NOTIFICATION,
    payload: data,
  };
};
