import React from "react";

// nodejs library that concatenates strings
import classnames from "classnames";

// import Landing from "../../views/home/Langding"
// import SearchFrom from "../../views/home/SearchForm"
// reactstrap components
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

function IndexNavbar() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

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
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            target="_blank"
            type="button"
            href="_index  "
          >
            SIÊU SO SÁNH
          </NavbarBrand>
          <Button
                    className="btn-round"
                    color="neutral"
                    type="button"
                    onClick={toggleModal}
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                    Tìm kiếm
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
                <Input placeholder="Tìm kiếm sản phẩm" type="text" />
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
                    <Button className="btn-link" type="button">
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
  );
}

export default IndexNavbar;
