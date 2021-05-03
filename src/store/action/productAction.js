import {ActionTypes} from '../types';
import axios from 'axios';
import {setLoader} from './loaderAction'
import { BASE_URL } from '../../static';

export const storeAllProduct=()=>async(dispatch,getStore)=>{
    // Here we get all product data
    dispatch(setLoader(true));
    let {data}=await axios.get(BASE_URL+'/products')
    dispatch(storeProductList(data));
    dispatch(setLoader(false));
}

export const storeSingleProduct=(id)=>async(dispatch,getStore)=>{
    // Here we get single product data 
    dispatch(setLoader(true));
    let {data}=await axios.get(`${BASE_URL}/products/${id}`)
    dispatch(storeProduct(data));
    dispatch(setLoader(false));
}

export const storeProductByCat=(cat_id)=>async(dispatch,getStore)=>{
    // here we get category wise product
    dispatch(setLoader(true));
    let {data}=await axios.get(BASE_URL+`/products/category/${cat_id}`)
    dispatch(storeProductForcategory(data));
    dispatch(setLoader(false));
}
export const addNewProduct=(data)=>async(dispatch,getStore)=>{
    // Admin create a new data
    dispatch(setLoader(true));


    dispatch(setLoader(false));
}

export const deleteProduct=(_id)=>async(dispatch,getStore)=>{
    // Admin delete product data
    const {token}=getStore().sessionStore


    axios.delete(BASE_URL+'/products/'+_id,{
        headers: {
          'authorization': `bearer ${token}` 
        }
      }).then((res)=>{
        dispatch(storeNotification({
            message:'Product Deleted',
            type:'SUCCESS',
            display:true
        }))
        dispatch(storeAllProduct())
        
    }).catch((e)=>{
        dispatch(storeNotification({
            message:e.response.data.error,
            type:'FAILED',
            display:true
        }))
    })
}

export const updateProduct=(data)=>async(dispatch,getStore)=>{
    // Adminn update product data
    const {token}=getStore().sessionStore

    axios.patch(`${BASE_URL}/products/${data.product_id}`,{
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
        image:data.image,
        stock: data.stock,
        category:{
            _id:data.category
        } 
    },{
        headers: {
          'authorization': `bearer ${token}` 
        }
      }).then((res)=>{
          console.log()
        dispatch(storeNotification({
            message:res.data.message,
            type:'SUCCESS',
            display:true
        }))
        dispatch(storeAllProduct())
        
    }).catch((e)=>{
        dispatch(storeNotification({
            message:e.response.data.error,
            type:'SUCCESS',
            display:true
        }))
    })
}




const storeProductList=(data)=>{
    return {
        type:ActionTypes.STORE_ALL_PRODUCT,
        payload:data
    }
}
const storeProductForcategory=(data)=>{
    return {
        type:ActionTypes.STORE_PRODUCT_BY_CATEGORY,
        payload:data
    }
}

const storeProduct=(data)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:data
    }
}

const addProduct=(data)=>{
    return {
        type:ActionTypes.ADD_NEW_PRODUCT,
        payload:data
    }
}

const storeNotification=(data)=>{
    return {
        type:ActionTypes.ADD_NEW_NOTIFICATION,
        payload:data
    }
}