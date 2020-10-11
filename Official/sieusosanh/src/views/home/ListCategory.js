import React, { Component } from 'react'
import { Container } from "reactstrap";
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import { useHistory } from "react-router-dom";

class ListCategory extends Component {
    GoToListProductsPage = () => {
        this.props.getListProductsByCategory("laptop")
        this.props.history.push(`/category/laptop`)
        console.log(action.getListProductsByCategory.length)
    }

    render() {
        return (
            <Container>
                <div>
                    <div className="category-title text-center">Danh mục phổ biến</div>
                    <hr/>
                </div>
                <div>
                    <ul>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div className="ok1" onClick={this.GoToListProductsPage}>Điện thoại</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div>Laptop</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div>Tivi</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div>Máy ảnh</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div>Máy giặt</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div>Tủ lạnh</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
            
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getListProductsByCategory:(code)=>{
            dispatch(action.getListProductsByCategory(code))
        }
    }
  }
export default withRouter(connect(null,mapDispatchToProps)(ListCategory));