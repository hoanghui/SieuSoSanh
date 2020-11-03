import React, { Component } from 'react'
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import BackToTop from "react-back-to-top-button";

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
                {/* <BackToTop
                    showOnScrollUp
                    showAt={100}
                    speed={1500}
                    easing="easeInOutQuint"
                    >
                    <span>scroll up</span>
                </BackToTop> */}
                <div>
                    <div className="category-title text-center">Danh mục phổ biến</div>
                    <hr/>
                </div>
                <div className="list-category-container">
                    <ul className="list-category">
                        <li>
                            <a type="button" onClick={()=> this.onSetState("dienthoai")}>
                                <p className="circle-category">
                                    <i class="fas fa-mobile-alt category-icon" ></i>  
                                </p>
                                <div className = "category-name">Điện thoại</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("laptop")}>
                                <p className="circle-category">
                                    <i class="fas fa-laptop category-icon"></i>
                                </p>
                                <div className = "category-name">Laptop</div>
                            </a>        
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("tivi")}>
                                <p className="circle-category">
                                    <i class="fas fa-tv category-icon"></i>
                                </p>
                                <div className = "category-name">Tivi</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("mayanh")}>
                                <p className="circle-category">
                                    <i class="fas fa-camera category-icon"></i>
                                </p>
                                <div className = "category-name">Máy ảnh</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("maygiat")}>
                                <p className="circle-category">
                                    <i class="fas fa-camera category-icon"></i>
                                </p>
                                <div className = "category-name">Máy giặt</div>
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={() => this.onSetState("tulanh")}>
                                <p className="circle-category">
                                    <i class="fas fa-camera category-icon"></i>
                                </p>
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