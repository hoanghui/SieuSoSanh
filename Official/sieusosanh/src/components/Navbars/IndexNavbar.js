import React, { Fragment } from "react";
import classnames from "classnames";
import { NavLink } from 'react-router-dom'
import {
  Button,
  Collapse,
  NavbarBrand,
  // UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Modal,
  Navbar,
  NavItem,
  // NavLink,
  Nav,
  Container,
  Input,
} from "reactstrap";
import * as action from "../../redux/actions"
import {connect} from "react-redux"

//withRouter de redirect qua trang khac
import { useHistory } from "react-router-dom";

//Khai báo props khi sử dụng function
function IndexNavbar({getListProductsByKeyWord}) {
  let history=useHistory()
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  //Connect to API

  const Search = () => {
    let text = document.getElementById("search-text").value
    if (text.length > 0) {
      history.push(`/search/${text}`)
      getListProductsByKeyWord(text)
      toggleModal()
    } else {
      alert("Vui lòng nhập từ khóa cần tìm!")
    }
  };

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      Search()
    }
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <div className="navbar-homeTemplate">
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavLink
            className="navbar-logo"
           to="/"
          >
            SIÊU SO SÁNH . COM
          </NavLink>
          <Button
                    className="btn-round"
                    color="neutral"
                    type="button"
                    onClick={toggleModal}
                  >
                    
                    Tìm kiếm
                    <i className="fa fa-search" aria-hidden="true"></i>
                    {/* <img src={require("../../assets/img/search.png")} className="search-icon"></img> */}
            </Button>
            <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Tìm kiếm
                  </h5>
                </div>
                <div className="modal-body">
                <Input id="search-text" name="search-text" placeholder="Tìm kiếm sản phẩm" type="text" onKeyPress={handleKeyPress} style={{border:"0px"}}/>
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="danger"
                      type="button"
                      onClick={toggleModal}
                    >
                      Hủy
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" type="button" onClick={Search}>
                        Tìm kiếm
                    </Button>
                  </div>
                </div>
              </Modal>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        className="dropdown"
                        nav 
                        onClick={(e) => e.preventDefault()}
                        role="button" 
                      >
                        danh mục sản phẩm
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem header tag="span">
                          Sản phẩm
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Tivi
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Tủ lạnh
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Máy giặt
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Laptop
                        </DropdownItem>
                        {/* <DropdownItem divider /> */}
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Điện thoại
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

const mapDispatchToProps=(dispatch)=>{
  return {
      getListProductsByKeyWord:(kw)=>{
          dispatch(action.getListProductsByKeyWord(kw))
      }
  }
}
export default connect(null,mapDispatchToProps)(IndexNavbar);
