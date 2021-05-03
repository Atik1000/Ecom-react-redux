import {ActionTypes} from '../types'

export const setLoader=(data)=>{
    // Here we create loader function 
    return {
        type:ActionTypes.LOADER,
        payload:data
    }
}