import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import OptionProduct from "./OptionProduct";
import BoxProduct from "./BoxProduct";
import {connect} from "react-redux";
//import PropTypes from "prop-types";

class SearchPage extends Component {
    renderProductBox=()=>{
        if(this.props.listProductsByKeyWord.length>0){
            return this.props.listProductsByKeyWord.map((item,index)=>{
                return (
                    <BoxProduct
                    key={index}
                    data={item}/>
                )
            })
        }
    }
    render() {
        let kw =this.props.match.params.kw;
        let {listProductsByKeyWord}=this.props
        let {listProductsByCategory} = this.props
        //console.log(listProductsByCategory.length)
        return (
            <div className="search-page">
                <div className='container'>
                    <div className="keyword-info py-4 text-center result">
                        Từ khóa "{kw}" có {listProductsByKeyWord.length} kết quả.
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            {/* <OptionProduct/> */}
                        </div>
                        <div className="col-lg-9" >
                            <div className="row product-list">
                                {this.renderProductBox()}
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        listProductsByKeyWord:state.productsReducer.listProductsByKeyWord,
        listProductsByCategory:state.productsReducer.listProductsByCategory,
        listSuppliersByCategoryCode:state.productsReducer.listSuppliersByCategoryCode
    }
}


export default connect(mapStateToProps,null)(SearchPage)