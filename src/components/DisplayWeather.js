import React from "react";
import "./displayweather.css";
import {
  WiDaySunny,
  WiHumidity,
  WiCloudDown,
  WiWindy,
  WiDirectionLeft,
  WiSunrise,
  WiSunset,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayRainMix,
  WiNightRainMix,
  WiThunderstorm,
  WiSnowflakeCold,
} from "weather-icons-react";

function DisplayWeather(props) {
  const { data } = props;
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
              <br />
              <span className="cardsubtitle">
                As of <br/>
                {new Date().toLocaleDateString('en-US',{weekday: 'short', day: "numeric" , month: "short", year: "numeric"})}
                {" "}{new Date().toLocaleTimeString()}
              </span>
            </span>
            <h1>
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>C
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <div className="weather-icon">
              {data.cod != 404 ? (
                data.weather[0].icon == "01d" ? (
                  <WiDaySunny size={240} color="#fff" />
                ) : (
                  <>
                    {data.weather[0].icon == "01n" ? (
                      <WiNightClear size={240} color="#fff" />
                    ) : (
                      <>
                        {data.weather[0].icon == "02d" ? (
                          <WiDayCloudy size={240} color="#fff" />
                        ) : (
                          <>
                            {data.weather[0].icon == "02n" ? (
                              <WiNightCloudy size={240} color="#fff" />
                            ) : (
                              <>
                                {data.weather[0].icon == "03d" ? (
                                  <WiCloud size={240} color="#fff" />
                                ) : (
                                  <>
                                    {data.weather[0].icon == "03n" ? (
                                      <WiCloud size={240} color="#fff" />
                                    ) : (
                                      <>
                                        {data.weather[0].icon == "04d" ? (
                                          <WiCloudy size={240} color="#fff" />
                                        ) : (
                                          <>
                                            {data.weather[0].icon == "04n" ? (
                                              <WiCloudy
                                                size={240}
                                                color="#fff"
                                              />
                                            ) : (
                                              <>
                                                {data.weather[0].icon ==
                                                "09d" ? (
                                                  <WiShowers
                                                    size={240}
                                                    color="#fff"
                                                  />
                                                ) : (
                                                  <>
                                                    {data.weather[0].icon ==
                                                    "09n" ? (
                                                      <WiShowers
                                                        size={240}
                                                        color="#fff"
                                                      />
                                                    ) : (
                                                      <>
                                                        {data.weather[0].icon ==
                                                        "10d" ? (
                                                          <WiDayRainMix
                                                            size={240}
                                                            color="#fff"
                                                          />
                                                        ) : (
                                                          <>
                                                            {data.weather[0]
                                                              .icon == "10n" ? (
                                                              <WiNightRainMix
                                                                size={240}
                                                                color="#fff"
                                                              />
                                                            ) : (
                                                              <>
                                                                {data.weather[0]
                                                                  .icon ==
                                                                "11d" ? (
                                                                  <WiThunderstorm
                                                                    size={240}
                                                                    color="#fff"
                                                                  />
                                                                ) : (
                                                                  <>
                                                                    {data
                                                                      .weather[0]
                                                                      .icon ==
                                                                    "11n" ? (
                                                                      <WiThunderstorm
                                                                        size={
                                                                          240
                                                                        }
                                                                        color="#fff"
                                                                      />
                                                                    ) : (
                                                                      <>
                                                                        {data
                                                                          .weather[0]
                                                                          .icon ==
                                                                        "13d" ? (
                                                                          <WiSnowflakeCold
                                                                            size={
                                                                              240
                                                                            }
                                                                            color="#fff"
                                                                          />
                                                                        ) : (
                                                                          <>
                                                                            {data
                                                                              .weather[0]
                                                                              .icon ==
                                                                            "13n" ? (
                                                                              <WiSnowflakeCold
                                                                                size={
                                                                                  240
                                                                                }
                                                                                color="#fff"
                                                                              />
                                                                            ) : (
                                                                              <>
                                                                                {data
                                                                                  .weather[0]
                                                                                  .icon ==
                                                                                "50d" ? (
                                                                                  <WiWindy
                                                                                    size={
                                                                                      240
                                                                                    }
                                                                                    color="#fff"
                                                                                  />
                                                                                ) : (
                                                                                  <>
                                                                                    {data
                                                                                      .weather[0]
                                                                                      .icon ==
                                                                                    "50n" ? (
                                                                                      <WiWindy
                                                                                        size={
                                                                                          240
                                                                                        }
                                                                                        color="#fff"
                                                                                      />
                                                                                    ) : (
                                                                                      <>

                                                                                      </>
                                                                                    )}
                                                                                  </>
                                                                                )}
                                                                              </>
                                                                            )}
                                                                          </>
                                                                        )}
                                                                      </>
                                                                    )}
                                                                  </>
                                                                )}
                                                              </>
                                                            )}
                                                          </>
                                                        )}
                                                      </>
                                                    )}
                                                  </>
                                                )}
                                              </>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )
              ) : null}
            </div>
            <span className="weather-description">
              {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <WiDaySunny size={44} color="#fff" />
                      </h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor(data.main.temp_max - 273.15)}/
                        {Math.floor(data.main.temp_min - 273.15)}
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <WiHumidity size={44} color="#fff" />
                      </h4>
                    </td>
                    <td>
                      <span>{data.main.humidity} %</span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <WiCloudDown size={44} color="#fff" />
                      </h4>
                    </td>
                    <td>
                      <span>{data.main.pressure} hPa</span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                          style={{
                            color: "#fff",
                            width: "35px",
                            marginLeft: "4px",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </h4>
                    </td>
                    <td>
                      <span>{data.visibility / 1000} Km</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section2">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <WiWindy size={44} color="#fff" />
                      </h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor((data.wind.speed * 18) / 5)} km/hr
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <WiDirectionLeft size={44} color="#fff" />
                      </h4>
                    </td>
                    <td>
                      <span>
                        {data.wind.deg}
                        <sup>o</sup> deg
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <WiSunrise size={44} color="#fff" />
                      </h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <h4>
                        <WiSunset size={44} color="#fff" />
                      </h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
