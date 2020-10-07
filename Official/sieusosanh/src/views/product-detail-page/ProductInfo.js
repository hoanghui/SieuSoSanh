import React, { Component } from 'react'
import {connect} from "react-redux"
//withRouter de redirect qua trang khac
import * as action from "../../redux/actions"

class ProductInfo extends Component {
    
    render() {
        let {data}=this.props
        return (
            <div className="col-lg-4">
                <div className="box-product">
                    <div className=" product-img">
                        <img/>
                    </div>
                    <div className=" product-detail product-name text-center my-1"></div>
                    <div className=" product-detail product-price text-center"></div>
                </div>
            </div>
        )
    }
}

export default ProductInfo;