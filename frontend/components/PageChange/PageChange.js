import React from "react";

// reactstrap components
import { NavbarBrand, Spinner } from "reactstrap";
import { PropTypes } from "prop-types";

// core components

export default function PageChange(props) {
  const { logo } = props;
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="page-transition-wrapper-div">
        <div className="page-transition-icon-wrapper mb-3">
          <Spinner
            color="white"
            style={{ width: "6rem", height: "6rem", borderWidth: ".3rem" }}
          />
        </div>
        <NavbarBrand
          href="#pablo"
          className="pt-0"
          style={{
            width: "100%",
            height: "4rem",
            alignItems: "center",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          {/* <img
            alt="Finance Chacha"
            className="navbar-brand-img"
            src={logo.imgSrc}
            style={{ width: "250rem", height: "37rem" }}
          /> */}
        </NavbarBrand>
        {/* <h4 className="title text-white">
          
        </h4> */}
      </div>
    </div>
  );
}
