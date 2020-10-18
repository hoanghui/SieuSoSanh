import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class ListBrand extends Component {
    render() {
        let data = this.props
        console.log('ok')
        return (<li>
            {data.SupplierName}
        </li>)
    }
}

const mapStateToProps=(state)=>{
    return {
        listSuppliersByCategoryCode:state.productsReducer.listSuppliersByCategoryCode
    }
}


export default withRouter(connect(mapStateToProps, null)(ListBrand))