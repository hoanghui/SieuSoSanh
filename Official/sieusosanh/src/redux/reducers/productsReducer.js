
//
let initialState={
    listProductsByKeyWord:[],
    productDetail:{}
}

const productsReducer =(state=initialState, action)=> {
    switch(action.type){
        case "LIST_PRODUCTS_BY_KEYWORD":
            state.listProductsByKeyWord=action.data;
            return{...state}
        case "PRODUCT_DETAIL":
            state.productDetail=action.data;
            return{...state}
        default:
            return {...state}
    }
}
export default productsReducer