import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState({});
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState([]);

  const location = useGeolocated();

  useEffect(() => {
    if (!location.coords) return;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((res) => {
        setForecast(res.data.list);
      });
  }, [location.coords]);

  return (
    <div
      style={{
        backgroundColor: " #FFE142",
      }}
      className="min-h-screen font-roboto lg:mx-[35vw]"
    >
      {location.coords && load ? (
        <Weather weather={weather} forecast={forecast} />
      ) : (
        <h1 className="text-xl text-center font-ledger pt-[44vh]">
          Please enable geolocation access...
        </h1>
      )}
    </div>
  );
}

export default App;
