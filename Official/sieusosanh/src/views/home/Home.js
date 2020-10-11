import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import ListCategory from "../home/ListCategory"

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
