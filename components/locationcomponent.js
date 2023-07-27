import React, { Component } from "react";
import Image from "next/image";
import { max } from "date-fns";
function Locationcomponent(props) {
  return (
    <div className="grid grid-cols-1 items-center h-1/4 w-80 sm:w-96 bg-white rounded-xl shadow-lg drop-shadow-lg ">
      <div className=" relative w-full  h-44 sm:h-64 mb-5">
        <Image
          src={props.image}
          fill
          alt="backgroung image 2"
          className="shadow-lg shadow-slate-600 rounded-lg"
          quality={100}
        ></Image>
      </div>
      <h1 className=" font-bold text-[#134074] sm:text-3xl text-2xl px-5">
        {props.heading}
      </h1>
      <p className=" text-justify font-semibold text-gray-600  text-base sm:text-lg p-5">
        {props.para}
      </p>
    </div>
  );
}

export default Locationcomponent;
