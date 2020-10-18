import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class ListBrand extends Component {
    render() {
        if(this.props){
            let {data} = this.props
            return (<li>
                {data.SupplierName}
            </li>
            )
            
        }
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getProductDetail: (id)=>{
            dispatch(action.getProductDetail(id))
        }
    }
}

// const mapStateToProps=(state)=>{
//     return {
//         listSuppliersByCategoryCode:state.productsReducer.listSuppliersByCategoryCode
//     }
// }


export default withRouter(connect(null, mapDispatchToProps)(ListBrand))