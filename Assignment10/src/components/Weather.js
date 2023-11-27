import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import WeatherList from "./WeatherList";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);

  const [form, setForm] = useState({
    city: "",
  });

  const APIKEY = "f6efd26a3efb672de21a0be4461c7d73";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Enter some input!");
    } else {
      //get today's forecast
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather( {data: data} );
          console.log(data);
        });

      
      //get hourly forecast
      const dailyData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&APPID=${APIKEY}`
    )
        .then((res) => res.json())
        .then((data) => {
            setDailyWeather({data: data});
            console.log(new Date(data.list[0].dt * 1000).toLocaleString("en-US", {weekday: "long"}));
            console.log(data);
        });

    }
  }



  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
  };

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={6} lg={6} >
            <Card className="weather_card mb-5">
              <Card.Body>
                <Card.Title className="ms-5">WEATHER FORECAST</Card.Title>
               <Card.Text>
                  <Form className="d-flex justify-content-center mt-3 mb-5">
                    <Form.Control type="text" name="city"
                      onChange={(e) => handleChange(e)} placeholder="Search for the weather of any city" className="search_input" />
                    <Button className="search_btn btn btn-primary btn-lg" onClick={(e) => weatherData(e)} >Search</Button>
                  </Form>

                </Card.Text>


                {weather.data != undefined ? (
                  <div>
                    <DisplayWeather data={weather.data} />
                  </div>
                ) : null}
              </Card.Body>
            </Card>
            


          </Col>
        </Row>
      </Container>
      {dailyWeather.data != undefined ? (
                  <div>
                    <WeatherList data={dailyWeather.data} />
                  </div>
                ) : null }
                




    </div>
  );
}

export default Weather;
