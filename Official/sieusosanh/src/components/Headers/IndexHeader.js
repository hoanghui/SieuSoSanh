/*eslint-disable*/
import React from "react";
import bg from "../../assets/img/bg_dienmay.jpg"

// reactstrap components
import { Container } from "reactstrap";

//slice show
import Slider from "react-slick";
// core components

function IndexHeader({namePage}) {
  return (
    <div className="header">
      <div
        className="page-header section-dark"
          style={{         
            backgroundImage:
              "url(" + require("../../assets/img/vach-ti-vi-trang-tri-9.jpg") + ")",
              minHeight:700
          }}
      >
        {/* <div className="filter" />   */}
        <div className="content-center">
          <Container>
            <div className="title-brand">
        <h1 className="presentation-title text-uppercase">{namePage}</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div> */}
            </div>
            <h2 className="presentation-subtitle text-center">
              
            </h2>
          </Container>
        </div>
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../../assets/img/clouds.png") + ")",
          }}
        /> */}
        <h6 className="category category-absolute">
          make by{" "}
          <a
            href="https://www.facebook.com/hoanghuy2015/"
            target="_blank"
          >
            <img
              className="creative-tim-logo"
              // src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a>
          hoang huy 🥺
        </h6>
      </div>
    </div>
  );
}

export default IndexHeader;
