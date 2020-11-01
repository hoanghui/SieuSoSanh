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

        this.props.history.push(`/${name}`)
        // this.GoToListProducts()

    }

    // GoToListProducts(){
    //     this.props.history.push(`/${this.state.category}`)
    //     console.log(this.state.category)
    // }

    // componentWillUnmount(){
    //     this.props.getListProductsByCategory(this.state.category)
    //     console.log("vo")
    // }
    
    render() {
        return (
            <div classNames="container-category">
                <div>
                    <div className="category-title text-center">Danh mục phổ biến</div>
                    <hr/>
                </div>
                <div className="list-category-container">
                    <ul className="list-category">
                        <li>
                            <a type="button" onClick={()=> this.onSetState("dienthoai")}>
                                <i class="fas fa-mobile-alt" ></i>
                                <div className = "category-name">Điện thoại</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("laptop")}>
                                <i class="fas fa-laptop"></i>
                                <div className = "category-name">Laptop</div>
                            </a>        
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("tivi")}>
                                <i class="fas fa-tv "></i>
                                <div className = "category-name">Tivi</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("mayanh")}>
                                <i class="fas fa-camera"></i>
                                <div className = "category-name">Máy ảnh</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("maygiat")}>
                                <i class="fas fa-camera"></i>
                                <div className = "category-name">Máy giặt</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("tulanh")}>
                                <i class="fas fa-camera"></i>
                                <div className = "category-name">Tủ lạnh</div>
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
        // getListSuppliersByCategoryCode:(name)=>{
        //     dispatch(action.getListSuppliersByCategoryCode(name))
        // }
    }
}

export default withRouter(connect(null,mapDispatchToProps)(ListCategory));