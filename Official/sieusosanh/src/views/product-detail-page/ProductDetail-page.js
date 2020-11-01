import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import ProductInfo from "../product-detail-page/ProductInfo";
import PriceTable from "./PriceTable"
import {connect} from "react-redux";
import * as action from "../../redux/actions/index";

class ProductDetailPage extends Component{
    renderProductDetail=()=>{
        return (
            <ProductInfo
            data={this.props.productDetail}/>
        )
    }

    renderSameProducts=()=>{
        let {productDetail} = this.props
        if(this.props.listSameProducts.length>0){
            return this.props.listSameProducts.map((item, index)=>{
                return (
                    <PriceTable
                    key = {index}
                    data={item}/>
                )
            })
        }
    }

    render() {
        return(
            <div>
                <div className="container product-info">
                    {this.renderProductDetail()}
                </div>
                <div className="container">
                    <hr/>
                </div>
                <div className="container price-table">
                    <div className="price-table-title">
                        <h2>Bảng giá bán</h2>
                    </div>
                    <div>
                        <ul className="list-same-products">
                            {this.renderSameProducts()}
                            <hr/>   
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        productDetail:state.productsReducer.productDetail,
        listSameProducts:state.productsReducer.listSameProducts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getListSameProducts:(productName)=>{
            dispatch(action.getListSameProducts(productName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailPage);