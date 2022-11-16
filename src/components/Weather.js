import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import gif from '../Assets/gif.gif'


function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = `731048237065cedf491b8338171bf163`;
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <div className="logo"><img src={gif} alt="" srcSet="" /></div>
      <span className="title">Weather Lens</span>
      <br />
      <InputGroup className="mb-3 form">
        <Form.Control
          style={{ background: 'transparent', border: 'none', border: '1px solid #001c3767' }}
          type="text"
          placeholder="City"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <Button className="getweather" variant="outline-secondary" id="button-addon2" onClick={(e) => weatherData(e)}>
          <svg style={{ color: "#fff", width: '22px', margin: '3px' }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </Button>
      </InputGroup>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
