import React, { Component } from 'react'
import { Container } from "reactstrap";
import * as action from "../../redux/actions/index"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import { useHistory } from "react-router-dom";

class ListCategory extends Component {

    GoToListProductsPage = (name) => {
        this.props.getListProductsByCategory(name)
        this.props.history.push(`/${name}`)
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
                                <div type="button" onClick={() => this.GoToListProductsPage('dienthoai')}>Điện thoại</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.GoToListProductsPage('laptop')}>Laptop</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.GoToListProductsPage('tivi')}>Tivi</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.GoToListProductsPage('mayanh')}>Máy ảnh</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i type="button" onClick={() => this.GoToListProductsPage('maygiat')} class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.GoToListProductsPage('maygiat')}>Máy giặt</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-camera"></i>
                                <div type="button" onClick={() => this.GoToListProductsPage('tulanh')}>Tủ lạnh</div>
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
        getListProductsByCategory:(name)=>{
            dispatch(action.getListProductsByCategory(name))
        }
    }
  }
export default withRouter(connect(null,mapDispatchToProps)(ListCategory));