import React from "react";

import { useQuery } from "react-query"
// reactstrap components
import { Button, Container, Row, Col, Spinner } from "reactstrap";
import { useAuth } from "../../providers/AuthProvider";

function UserHeader() {
  const { image, user } = useAuth(); 
  const { data, isLoading } = useQuery("data-user", () => axios.get("/user_data").then(res => res.data));
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">{`Hello ${data.firstname} ${data.lastname}`}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserHeader;
