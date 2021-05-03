import {ActionTypes} from '../types'

export const setNotificationDisplay=()=>async(dispatch,getStore)=>{
    dispatch(storeNotification());
}

const storeNotification=()=>{
    // Here we create nofication action ..wwe any item is added or not then show a message
    return {
        type:ActionTypes.ADD_NEW_NOTIFICATION,
        payload:{
            message:'',
            type:'',
            display:false
        }
    }
}
