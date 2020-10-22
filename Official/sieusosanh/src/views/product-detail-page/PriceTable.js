import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class ProductRow extends Component{
    GoToDetail=()=>{
        let {data}=this.props
        let id = data.ProductID
        this.props.getProductDetail(id)
        this.props.history.push(`/product/${id}`)
    }
    render() {
        let {data}=this.props
        return (
            <div className="col-lg-4">
                <div className="box-product">
                    <div className=" product-img">
                        <img src={data.LinkOfProductImage} atl={data.ProductName} />
                    </div>
                    <div className=" btn-sosanhgia text-center " onClick={this.GoToDetail}>
                        <div>So sánh giá</div>
                    </div>
                    <div className=" product-detail product-name text-center my-1">{data.ProductName}</div>
                    <div className=" product-detail product-price text-center">{data.Price}</div>
                </div>
            </div>
            
        )
    }
}

export default ProductRow