import { ActionTypes } from "../types";
import axios from "axios";
import {setLoader} from './loaderAction';

export const storeAllProduct = () => async (dispatch, getState) => {
    dispatch(setLoader(true))
  const allProducts = await axios.get(`http://54.162.199.74/products/`)

  dispatch(storeProducts(allProducts.data))
  dispatch(setLoader(false))
};

export const storeSingleProduct = (data) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: data,
  };
};

const storeProducts = (data) => {
  return {
    type: ActionTypes.STORE_ALL_PRODUCT,
    payload: data,
  };
};
