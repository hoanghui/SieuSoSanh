import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import ListCategory from "../home/ListCategory"
import BackToTop from "react-back-to-top-button";

export default class Home extends Component {
    render() {
        return (
            <div>
                <IndexHeader namePage={"SIÊU SO SÁNH"}/>
                <ListCategory/>
            </div>
        )
    }
}
