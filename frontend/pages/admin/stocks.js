import React, { useState } from "react";
import { DatePicker } from 'reactstrap-date-picker'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label,
  Container,
  Row,
  Col,
  Spinner,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup
} from "reactstrap";
// layout for this page
import data from "../../assets/data.json"
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";


function Tables() {
  const cashInflow = data.output_fields.values.cash_inflow;
  const cashOutflow = data.output_fields.values.cash_outflow;
  const [startValue, setStartValue] = useState(new Date().toISOString())
  const [endValue, setEndValue] = useState(new Date().toISOString())
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);


  const handleChangeStart = (value, formattedValue) => {
    setStartValue(value)
  }

  const handleChangeEnd = (value, formattedValue) => {
    setEndValue(value)
  }
  console.log(cashOutflow);
  const [stock, setStock] = useState("")
  const [stockName, setStockName] = useState("")
  const stocks = [
    {
      name: "Alphabet",
      value: "GOOG"
    }, {
      name: "Microsoft",
      value: "MSFT",
    }, {
      name: "Amazon",
      value: "AMZN"
    }, {
      name: "Facebook",
      value: "FB"
    }, {
      name: "Tesla",
      value: "TSLA"
    }, {
      name: "Netflix",
      value: "NFLX"
    }, {
      name: "JP Morgan Chase",
      value: "JPM"
    }, {
      name: "Visa",
      value: "V"
    }, {
      name: "The Procter & Gamble Company",
      value: "PG"
    }, {
      name: "Berkshire Hathaway Inc",
      value: "BRK-A"
    }
  ]

  const onChange = (e, item) => {
    setStock(e.target.value)
    setStockName(item.value)
  }

  return (
    <>
      <Header />
      <Col className="order-xl-1 center" xl="10" style={{ margin: "10px" }}>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Stock Prediction</h3>
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
                      <Label>Start Date</Label>
                      <DatePicker id="example-datepicker"
                        value={startValue}
                        onChange={(v, f) => handleChangeStart(v, f)} />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <Label>End Date</Label>
                      <DatePicker id="example-datepicker"
                        value={endValue}
                        onChange={(v, f) => handleChangeEnd(v, f)} />
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
                        Stock
                      </label>
                      <br></br>
                      <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                        <DropdownToggle caret>
                          {stock === "" ? "Stock" : stock}
                        </DropdownToggle>
                        <DropdownMenu>
                          {
                            stocks.map((item, i) => {
                              return (

                                <DropdownItem name="stock" value={item.name} onClick={(e) => onChange(e, item)}>{item.name}</DropdownItem>
                              )

                            })
                          }


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

                  // await mutateAsync({
                  //   ...formstate,
                  //   income: `${formstate.income}`,
                  //   emi_or_rent: `${formstate.emi_or_rent}s`

                  // });
                }}
              >
                {/* {isMutationLoading ? <Spinner /> : null} Save */}
                Predict
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Tables.layout = Admin;
export default Tables;
