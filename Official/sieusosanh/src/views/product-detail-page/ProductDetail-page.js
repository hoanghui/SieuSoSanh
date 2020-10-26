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
        
        // if(productDetail[0].ProductName && productDetail)
        // {
        //     this.props.getListSameProducts(this.props.productDetail[0].ProductName)
        // }
        if(productDetail && productDetail[0])
        {
            this.props.getListSameProducts(this.props.productDetail[0].ProductName)
            console.log(productDetail[0].ProductName)
        }
       
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
        let id =this.props.match.params.id;
        let {getProductDetail}=this.props
        return(
            <div>
                <div className="container product-info">
                    {this.renderProductDetail()}
                </div>
                <div>
                    <ul>
                        {this.renderSameProducts()}
                    </ul>
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