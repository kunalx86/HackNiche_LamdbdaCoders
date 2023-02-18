import { Container, Row, Button } from "reactstrap";
import React, { useState } from 'react';

import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";

const ExpensesPage = () => {
  
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
      <Container className="mt--7" fluid>
        <Row >
        <form onSubmit={handleSubmit}>

          <Button variant="contained" component="label">
            Upload File
            <br></br>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
          </Button>
          <Button type="submit">Submit</Button>

          </form>
        </Row>
      </Container>
    </>
  );
};

ExpensesPage.layout = Admin;

export default ExpensesPage;
