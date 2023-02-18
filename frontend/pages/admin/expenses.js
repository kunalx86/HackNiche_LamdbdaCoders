import { Container, Row, Button } from "reactstrap";
import React, { useState } from "react";

import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";
import { axios } from "../../axios";

const ExpensesPage = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post("/bank_statement/pdf_file", formData)
        .then((response) => {
          console.log("File uploaded successfully!");
          console.log(response.data);
          setData(response.data);
          return response.data;
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
            <Button variant="contained" component="label">
              Upload File
              <br></br>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </Button>
            <Button type="submit">Submit</Button>
          </form>
          {data ? <Expenses data={data} /> : null}
        </Row>
      </Container>
    </>
  );
};

const Expenses = ({ data }) => (
  <Container>
    {JSON.stringify(data, null, 2)}
  </Container>
)

ExpensesPage.layout = Admin;

export default ExpensesPage;
