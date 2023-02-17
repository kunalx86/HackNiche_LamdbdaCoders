import React, { useState } from "react";
import { Card, CardActionArea, CardContent, CardActions, Box, Grid } from "@material-ui/core"

import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
  CardHeader,
  Label

} from "reactstrap";
import investmentdata from "../../components/investmentdata";
import { Typography } from "@material-ui/core";
import Header from "components/Headers/Header.js";
import Admin from "layouts/Admin.js";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Example = () => {
  const [timeFactor, settimeFactor] = useState("5 years");
  const [riskFactor, setriskFactor] = useState("high");
  const [capital, setcapital] = useState(5000);
  const [current, setCurrent] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [investments, setInvestments] = React.useState(investmentdata[4].investments)


  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

  console.log(investments);




  return (


    <div>
      <Header />
      <Col className="order-xl-1" style={{ padding: "2rem" }}>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row style={{ textAlign: "center", margin: "auto" }}>
              <Col lg="6">
                <Label for="drop1">
                  <b>Risk Factor :&nbsp;</b>
                </Label>

                <Dropdown isOpen={dropdownOpen} toggle={toggle} id="drop1" >
                  <DropdownToggle caret>{riskFactor}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => {
                      setriskFactor("low")
                    }}>low</DropdownItem>
                    <DropdownItem onClick={() => {
                      setriskFactor("medium")
                    }}>medium</DropdownItem>
                    <DropdownItem onClick={() => {
                      setriskFactor("high")
                    }}>high</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col lg="6">
                <Label for="drop2">
                  <b>Time Duration :&nbsp;</b>
                </Label>

                <Dropdown isOpen={dropdownOpen1} toggle={toggle1} id="drop2">
                  <DropdownToggle caret>{timeFactor === "5 years" ? "short-term" : "long-term"}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => {
                      settimeFactor("5 years")
                    }}>short-term</DropdownItem>
                    <DropdownItem onClick={() => {
                      settimeFactor("10 years")
                    }}>long-term</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              {investmentdata.map((item, i) => {
                return (
                  item.risk_factor === riskFactor && item.time_period === timeFactor ? (

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ justifyContent: "center" }}>

                      {item.investments.map((ite, i) => (

                        <Box sx={{ maxWidth: 330 }} md={{ minWidth: 500 }}>
                          <Card variant="outlined" style={{ margin: "2rem" }} >
                            <React.Fragment>
                              <Card>
                                <CardContent>
                                  <CardTitle><b>Name :</b> {ite.name}</CardTitle>
                                  <CardTitle><b>Type :</b> {ite.type}</CardTitle>
                                  <CardTitle><b>Description : </b>{ite.description}</CardTitle>
                                  <CardTitle><b>Return_rate :</b> {ite.return_rate}</CardTitle>
                                  <CardTitle><b>Risk_level :</b> {ite.risk_level}</CardTitle>
                                  <CardTitle><b>Min_investment : </b>{ite.min_investment}</CardTitle>
                                  {/* <CardText>{item.investments}</CardText> */}
                                  <Button style={{ color: "black", backgroundColor: "lightblue" }} onClick={() => {
                                    setCurrent(i)
                                    setModalShow(true)
                                  }}>View More</Button>
                                </CardContent>
                              </Card>
                            </React.Fragment></Card>
                        </Box>


                      ))}
                    </Grid>



                  ) : (
                    <></>
                  )
                )
              })}
            </Row>
          </CardHeader>
        </Card>
      </Col>
      <Typography>

      </Typography>
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}


    </div>
  );
};

Example.layout = Admin;

export default Example;
