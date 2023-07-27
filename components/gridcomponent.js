import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link.js';

import Counseling from '../images/counseling.jpg'
import Selection from '../images/selection.jpg'
import assistant from '../images/application.jpg'
import test from '../images/test.jpg'
import visa from '../images/visa.jpg'
import scholarship from '../images/scholarship.jpg'
import departure from '../images/departure.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,faArrowRight
  } from "@fortawesome/free-solid-svg-icons";

function Gridcomponent(props) {
    return (
        <div className='flex flex-col items-center p-5 bg-white rounded-md shadow-lg drop-shadow-lg sm:ms-10 mt-10 hover:-translate-y-3 hover:cursor-pointer duration-200'>
        <h1 className=' font-bold text-[#134074] text-2xl'>{props.heading}</h1>
        <br></br>
        <div className=' relative w-full h-48 mb-5'>
        <Image src = {props.image} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
        </div>
        <p className=' text-center font-medium  text-base sm:text-lg pb-3'>{props.para}</p>
        <Link href={props.link} className=' hover:scale-125 flex space-x-2 items-center text-lg'><p>Read more</p><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
   </div>
    )
}

export default Gridcomponent