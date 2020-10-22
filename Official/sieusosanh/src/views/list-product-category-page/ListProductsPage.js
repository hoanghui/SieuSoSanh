import React, { Component } from 'react'
import {connect} from "react-redux"
import BoxSanPham from "../search-page/BoxSanPham"
import ListBrand from "./ListBrand"
import * as action from "../../redux/actions/index"

class ListProductsPage extends Component{
    renderProductbox=()=>{
        if(this.props.listProductsByCategory.length>0){
            return this.props.listProductsByCategory.map((item, index)=>{
                return (
                    <BoxSanPham 
                    key={index}
                    data={item}/>
                )
            })
        }
    }

    renderListBrand=()=>{
        let length = this.props.listSuppliersByCategoryCode
        console.log(length)
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
    
    componentWillUnmount=()=> {
        let name =this.props.match.params.name;
        this.props.getListSuppliersByCategoryCode(name);
    }

    render() {
        let {listProductsByCategory}=this.props
        console.log('ok qua roi ne')
        return listProductsByCategory && listProductsByCategory[0] ?
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
            </div>: null
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListProductsPage)
