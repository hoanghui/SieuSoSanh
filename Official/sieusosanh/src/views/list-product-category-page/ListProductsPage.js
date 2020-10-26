import React, { Component } from 'react'
import {connect} from "react-redux"
import BoxProduct from "../search-page/BoxProduct"
import ListBrand from "./ListBrand"
import * as action from "../../redux/actions/index"

class ListProductsPage extends Component{
    renderProductbox=()=>{
        // console.log(this.props.listProductsByCategory.length)
        let {listProductsByBrandName} = this.props
        let {listProductsByCategory} = this.props
        // if(listProductsByBrandName.length === 0){
        //     if(listProductsByCategory.length>0){
        //         return listProductsByCategory.map((item, index)=>{
        //             return (
        //                 <BoxProduct 
        //                 key={index}
        //                 data={item}/>
        //             )
        //         })
        //     }
        // }
        // else{
        return listProductsByCategory.map((item, index)=>{
                return (
                    <BoxProduct 
                    key={index}
                    data={item}/>
                )
        })
        //}
    }

    renderListBrand=()=>{
        if(this.props.listSuppliersByCategoryCode.length>0){
            return this.props.listSuppliersByCategoryCode.map((item, index)=>{
                return (
                    <ListBrand
                    key = {index}
                    data={item}/>
                )
            })
        }
    }

    render() {
        let {listProductsByCategory} = this.props
        return (
        listProductsByCategory && listProductsByCategory[0] ?
            <div className="search-page">
                <div className='container'>
                    <div className="keyword-info py-4 text-center result">
                        {listProductsByCategory[0].CategoryName} 
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="list-brand">
                                <strong>Thương hiệu</strong>
                                {this.renderListBrand()}
                            </ul>
                        </div>
                        <div className="col-lg-9" >
                            <div className="row product-list">
                                {this.renderProductbox()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>:null)
    }
}
const mapStateToProps=(state)=>{
    return {
        listProductsByCategory:state.productsReducer.listProductsByCategory,
        listSuppliersByCategoryCode:state.productsReducer.listSuppliersByCategoryCode
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getListSuppliersByCategoryCode:(name)=>{
            dispatch(action.getListSuppliersByCategoryCode(name))
        },
        getListProductsByCategory:(code) => {
            dispatch(action.getListProductsByCategory(code))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListProductsPage)
