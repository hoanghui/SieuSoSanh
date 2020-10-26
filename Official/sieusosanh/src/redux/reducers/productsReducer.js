
//
let initialState={
    listProductsByKeyWord:[],
    listProductsByCategory:[],
    listSuppliersByCategoryCode:[],
    productDetail:{},
    listProductsByBrandName:[],
    listSameProducts:[]
}

const productsReducer =(state=initialState, action)=> {
    switch(action.type){
        
        case "LIST_PRODUCTS_BY_KEYWORD":
            state.listProductsByKeyWord=action.data;
            return{...state}

        case "LIST_PRODUCTS_BY_CATEGORY":
            state.listProductsByCategory=action.data;
            return{...state}

        case "PRODUCT_DETAIL":
            state.productDetail=action.data;
            return{...state}
            
        case "LIST_SUPPLIERS_BY_CATEGORY_CODE":
            state.listSuppliersByCategoryCode=action.data;
            return{...state}

        case "LIST_PRODUCTS_BY_BRAND_NAME":
            state.listProductsByCategory=action.data;
            return{...state}

        case "LIST_SAME_PRODUCTS":
            state.listSameProducts=action.data;
            return{...state}

        default:
            return {...state}
    }
}
export default productsReducer