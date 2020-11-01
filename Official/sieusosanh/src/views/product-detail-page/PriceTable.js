import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class ProductRow extends Component{
    GoToDetail=()=>{
        
    }

    render() {
        let {data} = this.props
        return (
            <li className="same-product">
                <div className="store-product-img-wrapper">
                    <div className="store-product-img">
                        <img src={data.LinkOfProductImage}/>    
                    </div>
                </div>
                <div className="same-product-detail">
                    <div className="product-name">{data.ProductName}</div>
                    <div className="merchant-logo"></div>
                    <div className="price">{data.Price}</div>
                    <div className="product-go-action">Đến nơi bán</div>
                </div>
            </li>
        )
    }
}

export default ProductRow