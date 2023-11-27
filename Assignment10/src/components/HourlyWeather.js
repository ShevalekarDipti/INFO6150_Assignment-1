
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./displayweather.css";
import { useLocation } from "react-router-dom";

function HourlyWeather(props) {
  const location = useLocation();
  const newUrl = "http://openweathermap.org/img/wn/";


  var cloud = [];
  for (var i = 0; i < location.state.data.cnt; i++) {
    if (location.state.data.list[i].dt_txt.substring(8, 10) == location.state.date) {
      cloud.push(<div className="info d-flex justify-content-between">
        <div className="text-start">
          <p>{location.state.data.list[i].dt_txt}</p>
        </div>
        <div>
          <img src={newUrl + location.state.data.list[i].weather[0].icon + "@2x.png"} />
        </div>
        <div className="desc">
          <h5>{location.state.data.list[i].weather[0].description}</h5>
        </div>
        <div>
          <span class="temperature">{Math.floor(location.state.data.list[i].main.temp - 273.15)}°C</span>
        </div>
      </div>)
    }
  }


  return (
    <div className="App">
      <React.Fragment>
        <Container className="d-flex justify-content-center" style={{ marginTop: "150px", }}>
          <Row>
            <Col md={12} lg={12} >
              <h1>Hourly Weather Forecast</h1>
              <Card className="hourlyweather mt-5" >
                <Card.Body>
                  <h2>{location.state.data.city.name}</h2>

                  {cloud}

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default HourlyWeather;
