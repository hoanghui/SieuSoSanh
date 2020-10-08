import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import ProductInfo from "../product-detail-page/ProductInfo";
import {connect} from "react-redux";

class ProductDetailPage extends Component{
    renderProductDetail=()=>{
        return (
            <ProductInfo
            data={this.props.productDetail}/>
        )
    }

    render() {
        let id =this.props.match.params.id;
        let {getProductDetail}=this.props
        console.log("ok 2")
        return(
            <div className="container product-info">
                {this.renderProductDetail()}
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        productDetail:state.productsReducer.productDetail
    }
}

export default connect(mapStateToProps,null)(ProductDetailPage);