import Axios from "axios"

export const getListProductsByKeyWord=(kw)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/products/search/${kw}`
        })
        .then((rs)=>{
            dispatch({
                type:"LIST_PRODUCTS_BY_KEYWORD",
                data:rs.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getProductDetail=(id)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/products/detail/${id}`
        })
        .then((rs)=>{
            dispatch({
                type:"PRODUCT_DETAIL",
                data:rs.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getListProductsByCategory=(code)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/products/${code}`
        })
        .then((rs)=>{
            dispatch({
                type:"LIST_PRODUCTS_BY_CATEGORY",
                data:rs.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
} //

export const getListSuppliersByCategoryCode=(name)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/suppliers/${name}`
        })
        .then((rs)=>{
            dispatch({
                type:"LIST_SUPPLIERS_BY_CATEGORY_CODE",
                data:rs.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getListProductsByBrandName=(categoryCode,supplierID)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/products/${categoryCode}/${supplierID}`
        })
        .then((rs)=>{
            dispatch({
                type:"LIST_PRODUCTS_BY_BRAND_NAME",
                data:rs.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getListSameProducts=(productID)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/products/SameProducts/${productID}`
        })
        .then((rs)=>{
            dispatch({
                type:"LIST_SAME_PRODUCTS",
                data:rs.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}//