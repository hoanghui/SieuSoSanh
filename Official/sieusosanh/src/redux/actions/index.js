import Axios from "axios"

export const getListProductsByKeyWord=(kw)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`https://localhost:3001/api/Products/${kw}`
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
// export const getProductDetail=(id)=>{
//     return dispatch=>{
//         Axios({
//             method:"GET",
//             url:
//         })
//     }
// }