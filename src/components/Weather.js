import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import img from '../Assets/img2.png';
import { motion } from 'framer-motion'

function Weather() {
  const [smShow, setSmShow] = useState(false);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('Enter City Name...');

  const APIKEY = `731048237065cedf491b8338171bf163`;
  async function weatherData(e) {
    e.preventDefault();
    if (city == "" || city == 'Enter City Name...') {
      // alert("Add values");
      setSmShow(true);
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
      setCity('Enter City Name...')
      // console.log(city);
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setCity(value);
    }
  };
  return (
    <div className="weather">
      {weather.data != undefined ? (
      <div className="logo" style={{transitionDelay: '1s'}}><img src={img} alt="" srcSet="" /></div>
      ): <div style={{height: '80px'}}></div>}
      <span className="title">Weather Lens</span>
      <br />
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          Whoopsie Daisy!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter City Name...</Modal.Body>
      </Modal>
      <InputGroup className="mb-3 form">
        <Form.Control
        style={{ background: '#0909338c', color: 'rgb(255 255 255 / 65%)', fontSize: '15px', border: 'none', border: '1px solid #001c3767' }}
          type="text"
          name="city"
          value={city}
          onClick={()=> setCity('')}
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
      ) : 


      <motion.div className="front-img" initial={{y: -10}} animate={{y: 10}} transition={{type: 'smooth', repeatType: 'mirror', duration: 2, repeat: Infinity}}>
        <img src={img} alt="" />
      </motion.div>
      
      
      
      }
    </div>
  );
}

export default Weather;
