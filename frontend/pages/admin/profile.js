import React from "react";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";

function Profile() {
  const [value, setValue] = React.useState([2, 10]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  const [firstName, setFirstName] = React.useState("jay");
  const [lastName, setLastName] = React.useState("patel");
  const [email, setEmail] = React.useState("email");
  const [age, setAge] = React.useState(20);
  const [income, setIncome] = React.useState(100000)
  const [members, setMembers] = React.useState(4);
  const [earnings, setEarnings] = React.useState(200000)
  const [capital, setCapital] = React.useState(50000)
  const [expense, setExpense] = React.useState(50000)
  const [address, setAddress] = React.useState("Mumbai")

  const handleClick = (e) => {
    e.preventDefault();

  }
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <br></br>
                <div className="text-center justify-content-center mt-md-5">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => handleClick(e)}
                      size="sm"
                    >
                      Edit
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div FormclassName="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value)
                            }}

                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value)
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value)
                            }}

                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-age"
                          >
                            Age
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-age"
                            placeholder="age"
                            type="number"
                            value={age}
                            onChange={(e) => {
                              setAge(e.target.value)
                            }}

                          />
                        </FormGroup>
                      </Col>
                    </Row>

                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Financial information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-income"
                          >
                            Income
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-income"
                            placeholder="Income"
                            type="number"
                            value={income}
                            onChange={(e) => {
                              setIncome(e.target.value)
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-family-members"
                          >
                            Family Members
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={members}
                            id="input-family-members"
                            placeholder="Number"
                            type="number"
                            onChange={(e) => {
                              setMembers(e.target.value)
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-total-earnings"
                          >
                            Total Earnings
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={earnings}
                            id="input-total-earnings"
                            placeholder="0"
                            type="number"
                            onChange={(e) => {
                              setEarnings(e.target.value)
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-investment-capital"
                          >
                            Investment capital
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-investment-capital"
                            placeholder="0"
                            type="number"
                            value={capital}
                            onChange={(e) => {
                              setCapital(e.target.value)
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-expense"
                          >
                            Monthly Expense
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-expense"
                            placeholder="0"
                            type="number"
                            value={expense}
                            onChange={(e) => {
                              setExpense(e.target.value)
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="8">
                        <label
                          className="form-control-label"
                          htmlFor="input-risk-ratio"
                        >
                          Risk Ratio
                        </label>
                        <div style={{
                          margin: 'auto',
                          display: 'block',
                          width: 'fit-content'
                        }}
                          id="input-risk-ratio"
                        >

                          <Typography id="range-slider" gutterBottom>
                            Select Risk Range:
                          </Typography>
                          <Slider
                            value={value}
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                          />
                          Your range of Price is between {value[0]} /- and {value[1]} /-
                        </div>
                      </Col>


                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address Information */}
                  <h6 className="heading-small text-muted mb-4">Address Information</h6>
                  <Col lg="8">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Address
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Mumbai"
                        id="input-address"
                        placeholder="Address"
                        type="textarea"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value)
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <hr className="my-4" />



                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Profile.layout = Admin;

export default Profile;
