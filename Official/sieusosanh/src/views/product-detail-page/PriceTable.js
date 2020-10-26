import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class ProductRow extends Component{
    GoToDetail=()=>{
    }

    render() {
        let {listSameProducts} = this.props
        return (
            <li className="same-product">
                <div className="store-product-img-wrapper">
                    <div className="store-product-img">
                    <img src={listSameProducts.LinkOfProductImage}/>    
                    </div>
                </div>
                <div className="product-detail">
                    <div className="product-name"></div>
                    <div className="merchant-logo"></div>
                    <div className="price"></div>
                    <div className="go-buy-product"></div>
                </div>
            </li>
        )
    }
}

export default ProductRow