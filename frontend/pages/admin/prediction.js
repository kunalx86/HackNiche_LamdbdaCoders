import React, { useState } from "react";

import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";
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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
} from "reactstrap";
import { useMutation } from "react-query";
import { axios } from "../../axios";
const Predictions = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [formstate, setFormstate] = useState({
    education: 13,
    emi_rent: 0,
    earning_members: 0,
    mStatus: "Unmarried",
    occupation: "",
    country: "",
    relationship: "",
  });

  const { mutateAsync, isLoading: isMutationLoading } = useMutation(
    (data) => axios.post("/predict", data),
    {
      onSuccess(data, _, __) {
        setData(data.data);
      },
    }
  );

  const [userEdu, setUserEdu] = useState("");
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [data, setData] = useState(null);

  const onRadioBtnClick = (text) => {
    setFormstate((f) => ({
      ...f,
      mStatus: text,
    }));
  };

  const onChange = (e) => {
    console.log(e.target.name);
    setFormstate((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Header />
      <Col className="order-xl-1 center" xl="10" style={{ margin: "10px" }}>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Saving Prediction</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                Enter information for prediction
              </h6>
              <div FormclassName="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-qualification"
                      >
                        Education Standard
                      </label>
                      <br></br>
                      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                          {userEdu === "" ? "Education" : userEdu}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            name="eduNum"
                            value="10"
                            onClick={(e) => {
                              onChange(e);
                              setUserEdu("10th");
                            }}
                          >
                            10th
                          </DropdownItem>
                          <DropdownItem
                            name="eduNum"
                            value="12"
                            onClick={(e) => {
                              onChange(e);
                              setUserEdu("12th");
                            }}
                          >
                            12th
                          </DropdownItem>
                          <DropdownItem
                            name="eduNum"
                            value="13"
                            onClick={(e) => {
                              onChange(e);
                              setUserEdu("BTech or Equivalent");
                            }}
                          >
                            BTech or "Equivalent"
                          </DropdownItem>
                          <DropdownItem
                            name="eduNum"
                            value="14"
                            onClick={(e) => {
                              onChange(e);
                              setUserEdu("MBA or Equivalent");
                            }}
                          >
                            MBA or "Equivalent"
                          </DropdownItem>
                          <DropdownItem
                            name="eduNum"
                            value="15"
                            onClick={(e) => {
                              onChange(e);
                              setUserEdu("PHD or Equivalent");
                            }}
                          >
                            PHD or "Equivalent"
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-emi_or_rent"
                      >
                        EMI or Rent
                      </label>
                      <Input
                        name="emi_rent"
                        value={formstate.emi_rent}
                        onChange={onChange}
                        className="form-control-alternative"
                        id="input-emi_or_rent"
                        placeholder="EMI or Rent"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-earning_members"
                      >
                        Total Earning Members
                      </label>
                      <Input
                        name="earning_members"
                        value={formstate.earning_members}
                        onChange={onChange}
                        className="form-control-alternative"
                        id="input-earning_members"
                        placeholder="Earning Members"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-maritial_status"
                      >
                        Martial Status:
                      </label>
                      <br />
                      <ButtonGroup size="small">
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => onRadioBtnClick("Married")}
                          active={formstate.mStatus === "Married"}
                        >
                          Married
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => onRadioBtnClick("Unmarried")}
                          active={formstate.mStatus === "Unmarried"}
                        >
                          Unmarried
                        </Button>
                      </ButtonGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-occupation"
                      >
                        Occupation
                      </label>
                      <Input
                        name="occupation"
                        value={formstate.occupation}
                        onChange={onChange}
                        className="form-control-alternative"
                        id="input-occupation"
                        placeholder="Occupation"
                        type="text"
                      />
                    </FormGroup>
                  </Col>

                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Country
                      </label>
                      <Input
                        name="country"
                        value={formstate.country}
                        onChange={onChange}
                        className="form-control-alternative"
                        id="input-country"
                        placeholder="country"
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
                        htmlFor="input-Relationship"
                      >
                        Relationship
                      </label>
                      <br></br>
                      <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                        <DropdownToggle caret>
                          {formstate.relationship === ""
                            ? "Relationship"
                            : formstate.relationship}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            name="relationship"
                            value="Not in family"
                            onClick={onChange}
                          >
                            Not in family
                          </DropdownItem>
                          <DropdownItem
                            name="relationship"
                            value="Wife"
                            onClick={onChange}
                          >
                            Wife
                          </DropdownItem>
                          <DropdownItem
                            name="relationship"
                            value="Husband"
                            onClick={onChange}
                          >
                            Husband
                          </DropdownItem>
                          <DropdownItem
                            name="relationship"
                            value="Own child"
                            onClick={onChange}
                          >
                            Own child
                          </DropdownItem>
                          <DropdownItem
                            name="relationship"
                            value="Other"
                            onClick={onChange}
                          >
                            Other
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Address */}
              <Button
                // disabled={isMutationLoading}
                color="primary"
                onClick={async (e) => {
                  e.preventDefault();
                  console.log(formstate);
                  await mutateAsync({
                    ...formstate,
                    income: `${formstate.income}`,
                    emi_rent: `${formstate.emi_rent}s`,
                  });
                }}
              >
                {isMutationLoading ? <Spinner /> : null} Save Predict
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

Predictions.layout = Admin;
export default Predictions;
