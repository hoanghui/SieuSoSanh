import React, { Component } from 'react'

export default class BoxSanPham extends Component {
    render() {
        let {data}=this.props

        return (
            <div className="col-lg-4">
                <div className="box-product">
                    <div className=" product-img">
                        <img src="https://img.sosanhgia.com/images/500x0/b54bfba3268549b898091d941159794e/laptop-hp-pavilion-15cs3060tx-8rj61pa.jpeg" atl={data.ProductName} />
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
