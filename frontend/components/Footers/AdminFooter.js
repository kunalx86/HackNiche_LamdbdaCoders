/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="http://localhost:3000"
              rel="noopener noreferrer"
              target="_self"
            >
              app name
            </a>
          </div>
        </Col>


      </Row>
    </footer>
  );
}

export default Footer;
