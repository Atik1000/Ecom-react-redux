const INITIAL_STATE={
    count:0,
    productList:[]
}

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'ADD_TO_CART':
            console.log(action.payload,'===action payload ');
            return {...state,count:action.payload.count,productList:action.payload.productList}
        default:
            return state;
    }

}

export default CartReducer;