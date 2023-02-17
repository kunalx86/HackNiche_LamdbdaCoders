import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import investmentdata from "../../components/investmentdata";

const Example = () => {
  const [timeFactor, settimeFactor] = useState("short-term ");
  const [riskFactor, setriskFactor] = useState("High");
  const [capital, setcapital] = useState(5000);
  console.log(investmentdata);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Risk Factor : {riskFactor}</CardTitle>
          <CardTitle>Time Period : {timeFactor}</CardTitle>
          <CardTitle>Capital : {capital}</CardTitle>
        </CardBody>
      </Card>

      {investmentdata.map((item) => {
        return (
          <Card>
            <CardBody>
              <CardTitle>Risk Factor : {item.risk_factor}</CardTitle>
              <CardTitle>Time Period : {item.time_period}</CardTitle>
              <CardTitle>Capital : {item.capital}</CardTitle>
              <CardText>{item.investments}</CardText>
              <Button>View More</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Example;
