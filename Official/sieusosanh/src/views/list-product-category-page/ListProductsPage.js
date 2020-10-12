import React, { Component } from 'react'
import {connect} from "react-redux"
import BoxSanPham from "../search-page/BoxSanPham"

class ListProductsPage extends Component{
    renderProductbox=()=>{
        console.log("haha")
        if(this.props.listProductsByCategory.length>0){
            return this.props.listProductsByCategory.map((item,index)=>{
                return (
                    <BoxSanPham 
                    key={index}
                    data={item}/>
                )
            })
        }
    }

    render() {
        // let name =this.props.match.params.code;
        let {listProductsByCategory}=this.props
        console.log()
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
        listProductsByCategory:state.productsReducer.listProductsByCategory
    }
}

export default connect(mapStateToProps,null)(ListProductsPage)
