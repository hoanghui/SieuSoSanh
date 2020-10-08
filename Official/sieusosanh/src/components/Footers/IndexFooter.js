import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function IndexFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                >
                  SIÊU SO SÁNH
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Copyright © 2020 Little Bamboo Cute
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Email: info@sieusosanh.com
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Nguyen Hoang Huy
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
