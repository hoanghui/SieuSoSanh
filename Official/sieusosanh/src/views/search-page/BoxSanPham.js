import React, { Component } from 'react'

export default class BoxSanPham extends Component {
    render() {
        let {data}=this.props

        return (
            <div className="col-lg-4">
                <div className="box-product">
                    <div className=" product-img">
                        <img src="https://img.sosanhgia.com/images/500x0/85054a138e6540bd892c45fcb07cb234/nokia-105-dual-sim-2019.jpeg" atl={data.ProductName} />
                    </div>
                    <div className=" btn-sosanhgia text-center ">
                        <div >So sánh giá</div>
                    </div>
                    <div className=" product-detail product-name text-center my-1">{data.ProductName}</div>
                    <div className=" product-detail product-price text-center">{data.Price}</div>
                </div>
            </div>
            
        )
    }
}
