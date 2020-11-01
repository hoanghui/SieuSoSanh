import React, { Component } from 'react'
import {connect} from "react-redux"
import BoxProduct from "../search-page/BoxProduct"
import ListBrand from "./ListBrand"
import * as action from "../../redux/actions/index"
import { compose } from 'redux'

class ListProductsPage extends Component{
    renderProductbox=()=>{
        let {listProductsByCategory} = this.props
        return listProductsByCategory.map((item, index)=>{
                return (
                    <BoxProduct 
                    key={index}
                    data={item}/>
                )
        })
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

    goToOwner=(category)=>{
        console.log(category)
        this.props.history.push(`/${category}`)
    }

    componentDidMount=()=>{
        let name = this.props.match.params.name;
        let supplierName = this.props.match.params.supplierName;
        console.log(supplierName)
        if(supplierName){
            this.props.getListProductsByBrandName(name,supplierName)
            this.props.getListSuppliersByCategoryCode(name)
            console.log('ok')
        }
        else{
            this.props.getListSuppliersByCategoryCode(name)
            this.props.getListProductsByCategory(name)
        }
        
    }

    render() {
        let {listProductsByCategory} = this.props
        if(listProductsByCategory && listProductsByCategory[0]){
            console.log(listProductsByCategory[0])
        }
        return (
        listProductsByCategory && listProductsByCategory[0] ?
            <div className="search-page">
                <div className='container'>
                    <div className="keyword-info py-4 text-center result" onClick={()=>this.goToOwner(listProductsByCategory[0].CategoryCode)}>
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
        },
        getListProductsByBrandName:(categoryCode,supplierName) => {
            dispatch(action.getListProductsByBrandName(categoryCode, supplierName))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListProductsPage)
