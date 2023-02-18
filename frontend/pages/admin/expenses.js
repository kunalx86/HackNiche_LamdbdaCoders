import { Container, Row } from "reactstrap";
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Col,
  Spinner,
  Table,
  Media,
  Badge,
  Progress,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink

} from "reactstrap";
import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";
import data from "../../assets/data.json"
const ExpensesPage = () => {
  const cashInflow = data.output_fields.values.cash_inflow;
  const cashOutflow = data.output_fields.values.cash_outflow;

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
        method: 'POST',
        body: formData
      }).then(response => {
        console.log('File uploaded successfully!');
      }).catch(error => {
        console.error('Error uploading file:', error);
      });
    }
  }
  return (
    <>
      <Header />
      <Container className="mt--7" fluid >
        <Row style={{ textAlign: "center", margin: "auto", marginRight: "0px" }}>
          <form onSubmit={handleSubmit}>

            <Button variant="contained" component="label">
              Upload your bank statement
              <br></br>
              <input type="file" accept="application/pdf" onChange={handleFileChange} />
            </Button>
            <Button type="submit">Submit</Button>

          </form>
        </Row>
      </Container>

      {/* Page content */}

      <Container className="mt--15" fluid style={{ marginTop: "35px" }}>
        {/* Table */}
        <Row>

          <div className="col">

            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Personal expenses</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    {/* <th scope="col">Users</th> */}
                    <th scope="col">Expense</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>

                  {
                    Object.keys(cashOutflow).map((item) => {
                      return (

                        <>
                          <tr>
                            <th scope="row">
                              <Media>
                                <span className="mb-0 text-sm">
                                  {item}
                                </span>
                              </Media>
                            </th>
                            <td>{cashOutflow[item].amount}</td>
                            <td>
                              {(cashOutflow[item].amount / 100000) * 100 > 40 ? (

                                <Badge color="" className="badge-dot mr-4">
                                  <i className="bg-warning" />
                                  High
                                </Badge>
                              ) : (
                                <Badge color="" className="badge-dot mr-4">
                                  <i className="bg-success" />
                                  Normal
                                </Badge>

                              )}
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="mr-2">{Math.ceil((cashOutflow[item].amount / 100000) * 100)} %</span>
                                <div>
                                  <Progress
                                    max="100"
                                    value={(cashOutflow[item].amount / 100000) * 100}
                                    barClassName={(cashOutflow[item].amount / 100000) * 100 > 40 ? "bg-danger" : "bg-success"}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }

                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

ExpensesPage.layout = Admin;

export default ExpensesPage;
