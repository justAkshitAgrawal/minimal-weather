import React from "react";
import InfoCard from "./InfoCard";

function Weather({ weather, forecast }) {
  const current = new Date();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-xl font-bold text-center font-ledger mx-[40vw]">
        {weather.name}
      </h1>
      <h1
        className="px-3 py-1 mt-6 text-xs bg-black rounded-full"
        style={{
          color: "#FFE142",
        }}
      >
        {" "}
        {weekday[current.getDay()]},{" "}
        {current.getDate() + " " + month[current.getMonth()]}
      </h1>
      <h1 className="mt-2 font-semibold">{weather?.weather[0]?.main}</h1>

      <h1 className="text-[20vh] -mt-5 font-roboto ">
        {weather.main.temp.toFixed(0)}°
      </h1>

      <div className="self-start -mt-2 px-11 font-roboto ">
        <h1 className="text-sm font-extrabold ">Daily Summary</h1>
        <h1 className="mt-1 text-xs font-semibold">
          Feels like {weather.main.feels_like.toFixed(0)}°, but it's actually{" "}
          {weather.main.temp.toFixed(0)}°.
        </h1>
        <h1 className="text-xs font-semibold">
          The temperature is felt in the range from{" "}
          {weather.main.temp_min.toFixed(0)}° to{" "}
          {weather.main.temp_max.toFixed(0)}°.
        </h1>
      </div>

      <InfoCard weather={weather} />

      <div className="self-start mt-[5vh] px-11 font-roboto ">
        <h1 className="text-sm font-extrabold ">Forecast</h1>
        <div className="flex space-x-4 overflow-scroll w-[74vw] lg:w-[25vw] scrollbar-hide ">
          {forecast?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center min-w-[20vw] scrollbar-hide lg:min-w-[10vw] p-2 mt-2 border-2 border-black rounded-xl"
              >
                <h1>{item.main.temp.toFixed(0)}°</h1>
                <img
                  src={`
                  https://openweathermap.org/img/wn/${item.weather[0].icon}.png
                `}
                  className="w-10 h-10"
                  alt=""
                />
                <h1 className="text-xs text-black">
                  {item.dt_txt.split(" ")[1].slice(0, 5)}
                </h1>
                <h1 className="text-xs text-black">
                  {item.dt_txt.split(" ")[0].slice(8, 10)}{" "}
                  {month[item.dt_txt.split(" ")[0].slice(5, 7) - 1]}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Weather;
