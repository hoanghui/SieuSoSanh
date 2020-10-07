import React, { Component } from 'react'
import {connect} from "react-redux"
//withRouter de redirect qua trang khac
import * as action from "../../redux/actions"
import { useHistory } from "react-router-dom";

class BoxSanPham extends Component {

    GoToDetail=()=>{
        let {data}=this.props
        let id = data.ProductID
        console.log(id)
        //useHistory.push(`product/${id}`)
        action.getProductDetail(id)
    }
    render() {
        let {data}=this.props
        return (
            <div className="col-lg-4">
                <div className="box-product">
                    <div className=" product-img">
                        <img src={data.LinkOfProductImage} atl={data.ProductName} />
                    </div>
                    <div className=" btn-sosanhgia text-center " onClick={this.GoToDetail}>
                        <div>So sánh giá</div>
                    </div>
                    <div className=" product-detail product-name text-center my-1">{data.ProductName}</div>
                    <div className=" product-detail product-price text-center">{data.Price}</div>
                </div>
            </div>
            
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getProductDetail:(id)=>{
            dispatch(action.getProductDetail(id))
        }
    }
}

export default connect(null,mapDispatchToProps)(BoxSanPham);