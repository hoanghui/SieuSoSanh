import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import OptionSanPham from "./OptionSanPham";
import BoxSanPham from "./BoxSanPham";
import {connect} from "react-redux";

class SearchPage extends Component {
    
    renderProductBox=()=>{
        if(this.props.listProductsByKeyWord.length>0){
            return this.props.listProductsByKeyWord.map((item,index)=>{
                return (
                    <BoxSanPham 
                    key={index}
                    data={item}/>
                )
            })
        }
        
    }
    render() {
        let kw =this.props.match.params.kw;
        let {listProductsByKeyWord}=this.props
        console.log(listProductsByKeyWord)
        return (
            <div className="search-page">
                <IndexHeader namePage={kw}/>
                <div className='container'>
                    <div className="keyword-info py-4 text-center">
                        Tu khoa "{kw}" co {listProductsByKeyWord.length} ket qua
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <OptionSanPham/>
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
        listProductsByKeyWord:state.productsReducer.listProductsByKeyWord
    }
}


export default connect(mapStateToProps,null)(SearchPage)