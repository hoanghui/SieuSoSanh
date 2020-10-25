import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class ListCategory extends Component {

    constructor(props){
        super(props);
        this.state={
            category: ''
        }
    }


    
    onSetState=(name)=>{
        this.setState({
            category: name
        })
        this.GoToListProductsPage()
    }

    GoToListProductsPage = () => {
        // this.props.getListProductsByCategory(name)
        this.props.history.push(`/${this.state.category}`)
    }

    componentWillUnmount(){
        this.props.getListProductsByCategory(this.state.category)
    }

    render() {

        return (
            <div classNames="container-category">
                <div>
                    <div className="category-title text-center">Danh mục phổ biến</div>
                    <hr/>
                </div>
                <div>
                    <ul className="list-category">
                        <li>
                            <a>
                                <i class="fas fa-camera" ></i>
                                <div type="button" onClick={()=>this.onSetState("dienthoai")}>Điện thoại</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.onSetState("dienthoai")}>Laptop</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.onSetState("dienthoai")}>Tivi</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.onSetState("dienthoai")}>Máy ảnh</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i type="button" onClick={() => this.GoToListProductsPage('maygiat')} class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.onSetState("maygiat")}>Máy giặt</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.onSetState("dienthoai")}>Tủ lạnh</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getListProductsByCategory:(name)=>{
            dispatch(action.getListProductsByCategory(name))
        },
        getListSuppliersByCategoryCode:(code)=>{
            dispatch(action.getListSuppliersByCategoryCode(code))
        }
    }
}

export default withRouter(connect(null,mapDispatchToProps)(ListCategory));