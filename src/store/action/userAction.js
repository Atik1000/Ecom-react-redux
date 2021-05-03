// import {ActionTypes} from '../types';
// import axios from 'axios';
// import { BASE_URL } from '../../static';

// export const getUserList=(data)=>async(dispatch,getStore)=>{
//     const {token}=getStore().sessionStore
//     axios.get(BASE_URL+'/user',{
//         headers: {
//         'authorization': `bearer ${token}` 
//         }
//     }).then((res)=>{
//         dispatch(storeUserData(res.data))
        
//     }).catch((e)=>{
//         dispatch(storeNotification({
//             message:e.response.data.error,
//             type:'FAILED',
//             display:true
//         }))
//     })
// }


// const storeUserData=(data)=>{
//     return {
//         type:ActionTypes.STORE_ALL_USER_LIST,
//         payload:data
//     }
// }
// const storeNotification=(data)=>{
    
//     return {
//         type:ActionTypes.ADD_NEW_NOTIFICATION,
//         payload:data
//     }
// }
