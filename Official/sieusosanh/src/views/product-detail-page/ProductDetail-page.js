import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import ProductInfo from "../product-detail-page/ProductInfo";
import {connect} from "react-redux";

class ProductDetailPage extends Component{
    renderProductDetail=()=>{
        return this.props.getProductDetail.map((item,index)=>{
            return (
                <ProductInfo
                    key={index}
                    data={item}
                />
            )
        })
    }

    render() {
        let id =this.props.match.params.id;
        let {getProductDetail}=this.props
        return(
            <div></div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        getProductDetail:state.productsReducer.getProductDetail
    }
}

export default connect(mapStateToProps,null)(ProductDetailPage)