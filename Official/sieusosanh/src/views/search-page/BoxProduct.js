import React, { Component } from 'react'
import {connect} from "react-redux"
//withRouter de redirect qua trang khac
import * as action from "../../redux/actions"
import {withRouter} from "react-router-dom"

class BoxProduct extends Component {
    GoToDetail=()=>{
        let {data}=this.props
        let id = data.ProductID
        let name = data.ProductName
        //console.log(name)
        this.props.getProductDetail(id)
        this.props.getListSameProducts(id)
        this.props.history.push(`/product/${name}`)
    }

    componentWillUnmount(){
        let {data}=this.props
        let id = data.ProductID
        console.log("vo roi")
        // console.log(id)
        // this.props.getListSameProducts(id)
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
        getProductDetail: (id)=>{
            dispatch(action.getProductDetail(id))
        },
        getListSameProducts: (productID)=>{
            dispatch(action.getListSameProducts(productID))
        }
    }
}

export default withRouter(connect(null,mapDispatchToProps)(BoxProduct));