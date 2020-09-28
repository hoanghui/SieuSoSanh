import React, { Component } from 'react'

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

export default class OptionSanPham extends Component {
    render() {
        return (
            <div className="section-collapse">
                <div className="section-collapse-trigger">
                    <div className="collapse-label">
                        Nhãn hiệu
                    </div>
                </div>
                <div className="section-collapse-body collapse in">
                    <div className="scroll-container scroll-height">
                        <ul className="scrollbox">
                                               
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
