import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class ListBrand extends Component {
    GoToListProductsByBrandName=()=>{
        if(this.props && this.props.listSuppliersByCategoryCode){
            let temp = this.props.listSuppliersByCategoryCode
            let categoryCode = temp[0].CategoryCode
            let {data} = this.props
            console.log(categoryCode)
            console.log(data.SupplierID)
            this.props.getListProductsByBrandName(categoryCode, data.SupplierName)
            this.props.history.push(`/${categoryCode}/${data.SupplierName}`)
        }
    }
    
    render() {
        if(this.props){
            let {data} = this.props
            let {list} = this.props.listProductsByCategory
            return (<li onClick={()=>this.GoToListProductsByBrandName()}>
                    {data.SupplierName} ({data.QuantityProduct})
                </li>
            )
        }
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getListProductsByBrandName:(categoryCode, SupplierID) =>{
            dispatch(action.getListProductsByBrandName(categoryCode, SupplierID))
        }
    }
}

const mapStateToProps=(state)=>{
    return {
        listSuppliersByCategoryCode:state.productsReducer.listSuppliersByCategoryCode,
        listProductsByCategory:state.productsReducer.listProductsByCategory,
        listProductsByBrandName:state.productsReducer.listProductsByBrandName
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListBrand))