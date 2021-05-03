import axios from 'axios';
import { BASE_URL } from '../../static';
import {ActionTypes} from '../types'


export  const storeAllCategory=()=>async(dispatch,getStore)=>{
    // In admin pannel when we added category then store data
    let {data}=await axios.get(BASE_URL+'/category')
    dispatch(storeCategory(data))
}
export const addNewCateogry=(data)=>async(dispatch,getStore)=>{
    // Here we create a new category in admin pannel 
    const {token}=getStore().sessionStore


    axios.post(BASE_URL+'/category',{
        name: data.name,
        description: data.description,
        image:data.image
    },{
        headers: {
          'authorization': `bearer ${token}` 
        }
      }).then((res)=>{
        dispatch(storeNotification({
            message:'Added new category',
            type:'SUCCESS',
            display:true
        }))
        dispatch(storeAllCategory())
        
    }).catch((e)=>{
        dispatch(storeNotification({
            message:e.response.data.error,
            type:'FAILED',
            display:true
        }))
    })
}

export const deleteCateogry=(category_id)=>async(dispatch,getStore)=>{
    // Here delete category functionality
    const {token}=getStore().sessionStore


    axios.delete(BASE_URL+'/category/'+category_id,{
        headers: {
          'authorization': `bearer ${token}` 
        }
      }).then((res)=>{
        dispatch(storeNotification({
            message:'Category Deleted',
            type:'SUCCESS',
            display:true
        }))
        dispatch(storeAllCategory())
        
    }).catch((e)=>{
        dispatch(storeNotification({
            message:e.response.data.error,
            type:'FAILED',
            display:true
        }))
    })
}

export const updateCategory=(data)=>async(dispatch,getStore)=>{
    // Here update category functionality added 
    const {token}=getStore().sessionStore

    axios.patch(`${BASE_URL}/category/${data.category_id}`,{
        name: data.name,
        description: data.description,
        image:data.image
    },{
        headers: {
            // when user Authorization key baki ta value server side a
          'authorization': `bearer ${token}` 
        }
      }).then((res)=>{
        dispatch(storeNotification({
            message:'Category Updated',
            type:'SUCCESS',
            display:true
        }))
        dispatch(storeAllCategory())
        
    }).catch((e)=>{
        dispatch(storeNotification({
            message:e.response.data.error,
            type:'SUCCESS',
            display:true
        }))
    })
}



const storeCategory=(data)=>{
    return {
        type:ActionTypes.STORE_ALL_CATEGORY,
        payload:data
    }
}

const storeNotification=(data)=>{
    return {
        type:ActionTypes.ADD_NEW_NOTIFICATION,
        payload:data
    }
}