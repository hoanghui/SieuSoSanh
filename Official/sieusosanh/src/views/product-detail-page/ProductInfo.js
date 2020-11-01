import React, { Component } from 'react'
import {connect} from "react-redux"
//withRouter de redirect qua trang khac
import * as action from "../../redux/actions"

class ProductInfo extends Component {
    render() {
        let {data}=this.props
        return data && data[0] ? 
        <div className="box-product-info container row">
            <div className="product-slide-container col-lg-6">
                <div className=" product-img">
                    <img src={data[0].LinkOfProductImage}/>
                </div>
            </div>
            <div className="info-product-detail col-lg-6">
                <div className=" product-detail-name text-center my-1">
                    <h1>{data[0].ProductName}</h1>
                </div>
                <hr/>
                <div className="priority-store">
                    <span>Giá tốt từ nơi bán: </span>
                    <div className="product-price-detail">
                        {data[0].Price}
                    </div>
                    <div>
                        <a type="button" class="btn btn-outline-danger float-lg-right" href={data[0].HyperLink}> Đến nơi bán </a>
                    </div>
                    
                </div>
            </div>
        </div>: null
    }
}

const mapStateToProps=(state)=>{
    return {
        productDetail:state.productsReducer.productDetail
    }
}


export default connect(mapStateToProps,null)(ProductInfo);