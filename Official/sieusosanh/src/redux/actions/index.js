import Axios from "axios"

export const getListProductsByKeyWord=(kw)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/Products/search/${kw}`
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
            url:`https://localhost:3001/api/Products/detail/${id}`
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
            url:`https://localhost:3001/api/Products/${code}`
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
}