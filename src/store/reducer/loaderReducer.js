const INITIAL_STATE={
    loading:true,
}

const LoaderReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'LOADER':
      
            return {...state,loading:action.payload}
        default:
            return state;
    }

}

export default LoaderReducer;