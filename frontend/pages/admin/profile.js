import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
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
  Spinner,
} from "reactstrap";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useAuth } from "../../providers/AuthProvider";
import { axios } from "../../axios";

function Profile() {
  const { image, user } = useAuth();
  const [value, setValue] = React.useState([2, 10]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  const queryClient = useQueryClient();
  const [formstate, setFormstate] = useState({
    firstname: "",
    lastname: "",
    age: 18,
    income: 10000,
    family_members_count: 0,
    total_earnings: 10000,
    country: "",
    aboutMe: "",
    address: "",
    expense: 5000
  });
  const { data, isLoading } = useQuery(
    "data-user",
    () => axios.get("/user_data").then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutateAsync, isLoading: isMutationLoading } = useMutation(
    (draft) => axios.post("/user_data", draft),
    {
      onError(_, __, ___) {
        ToastsStore.error("Something went wrong! 😥");
      },
      onSuccess(_, __, ___) {
        ToastsStore.success("Data saved successfully! 🥳");
      },
      onSettled(_, __, ___) {
        queryClient.invalidateQueries("data-user");
      },
    }
  );

  useEffect(() => {
    if (!isLoading && data) {
      setFormstate((f) => ({
        ...f,
        ...data,
        income: parseInt(data.income),
        expense: parseInt(data.expense)
      }));
    }
  }, [isLoading, data]);

  const onChange = (e) => {
    setFormstate((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
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
                        className=""
                        src={
                          typeof window !== "undefined"
                            ? window.webkitURL.createObjectURL(image)
                            : ""
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">➕22%</span>
                        <span className="description">Savings</span>
                      </div>
                      <div>
                        <span className="heading">➕10%</span>
                        <span className="description">Expenditure</span>
                      </div>
                      <div>
                        <span className="heading">➕26%</span>
                        <span className="description">Portfolio Growth</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {`${data.firstname} ${data.lastname}`}
                    <span className="font-weight-light">, {data.age}</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {data.country}
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
                            name="firstname"
                            value={formstate.firstname}
                            onChange={onChange}
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
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
                            name="lastname"
                            value={formstate.lastname}
                            onChange={onChange}
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
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
                            name="email"
                            value={user.identity.email}
                            disabled
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
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
                            name="age"
                            value={formstate.age}
                            onChange={onChange}
                            className="form-control-alternative"
                            id="input-age"
                            placeholder="age"
                            type="number"
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
                            name="income"
                            value={formstate.income}
                            onChange={onChange}
                            className="form-control-alternative"
                            id="input-income"
                            placeholder="Income"
                            type="number"
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
                            name="family_members_count"
                            value={formstate.family_members_count}
                            onChange={onChange}
                            className="form-control-alternative"
                            id="input-family-members"
                            placeholder="Number"
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
                            name="total_earnings"
                            value={formstate.total_earnings}
                            onChange={onChange}
                            className="form-control-alternative"
                            id="input-total-earnings"
                            placeholder="0"
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
                            name="expense"
                            value={formstate.expense}
                            onChange={onChange}
                            className="form-control-alternative"
                            defaultValue="expense"
                            id="input-expense"
                            placeholder="expense"
                            type="number"
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
                        <div
                          style={{
                            margin: "auto",
                            display: "block",
                            width: "fit-content",
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
                          Your range of Price is between {value[0]} /- and{" "}
                          {value[1]} /-
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address Information */}
                  <h6 className="heading-small text-muted mb-4">
                    Address Information
                  </h6>
                  <Col lg="8">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Address
                      </label>
                      <Input
                        name="address"
                        onChange={onChange}
                        value={formstate.aboutMe}
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue=""
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                  <Button
                    disabled={isMutationLoading}
                    color="primary"
                    onClick={async (e) => {
                      e.preventDefault();
                      await mutateAsync({
                        ...formstate,
                        income: `${formstate.income}`,
                        expense: `${formstate.expense}`
                      });
                    }}
                  >
                    {isMutationLoading ? <Spinner /> : null} Save
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.BOTTOM_CENTER}
        />
      </Container>
    </>
  );
}

Profile.layout = Admin;

export default Profile;
