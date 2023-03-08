import React from "react";
import { BiWind } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { IoWater } from "react-icons/io5";

function InfoCard({ weather }) {
  return (
    <div className="flex items-center p-5 mt-4 space-x-16 text-sm text-[#FFE142] bg-black w-[80vw] lg:w-[15vw] text- mx-11 rounded-xl">
      <div>
        <div className="flex flex-col items-center ">
          <BiWind className="w-6 h-6 mb-2 animate-pulse" />
          <h1>{weather.wind.speed.toFixed(0)}km/h</h1>
          <h1 className=" text-[0.7em]">Wind</h1>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center ">
          <IoWater className="w-6 h-6 mb-2 animate-bounce " />
          <h1>{weather.main.humidity.toFixed(0)}%</h1>
          <h1 className=" text-[0.7em]">Humidity</h1>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center ">
          <FaEye className="w-6 h-6 mb-2 animate-wiggle" />
          <h1>{weather.visibility / 1000}km</h1>
          <h1 className=" text-[0.7em]">Visibility</h1>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
