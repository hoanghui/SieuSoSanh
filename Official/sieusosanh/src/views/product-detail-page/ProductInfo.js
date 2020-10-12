import React, { Component } from 'react'
import {connect} from "react-redux"
//withRouter de redirect qua trang khac
import * as action from "../../redux/actions"

class ProductInfo extends Component {
    render() {
        let {data}=this.props
        return data && data[0] ? 
        <div className="box-product-info">
            <div className="product-slide-container float-left">
                <div className=" product-img">
                    <img src={data[0].LinkOfProductImage}/>
                </div>
            </div>
            <div className="float-left">
                <div className=" product-detail text-center my-1">
                    {data[0].ProductName}
                </div>
                <hr/>
                <div className="priority-store">
                    <span>Giá tốt từ nơi bán: </span>
                    <div className="product-price">
                        {data[0].Price}
                    </div>
                </div>
                <a type="button" class="btn btn-outline-danger float-lg-right" href={data[0].HyperLink}> Đến nơi bán </a>
                <img/>
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