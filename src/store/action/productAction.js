import { ActionTypes } from "../types";
import axios from "axios";
import {setLoader} from './loaderAction';
import { BASE_URL } from "../../static";


export const storeAllProduct=()=>async(dispatch,getState)=>{
  dispatch(setLoader(true));
  let {data}=await axios.get(`${BASE_URL}/products`)
  dispatch(storeProductList(data));
  dispatch(setLoader(false));
}
export const storeSingleProduct=(_id)=>async(dispatch,getState)=>{
  dispatch(setLoader(true));
   let {data}=await axios.get(`${BASE_URL}/products/${_id}`)
  dispatch(storeProduct(data));
  dispatch(setLoader(false));
}
const storeProductList=(data)=>{
  return {
      type:ActionTypes.STORE_ALL_PRODUCT,
      payload:data
  }
}
const storeProduct=(data)=>{
  return {
      type:ActionTypes.SELECTED_PRODUCT,
      payload:data
  }
}
