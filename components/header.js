import React, { Component } from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'
import logo from '../images/logo.png'
import Link from 'next/link.js';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar
  } from "@fortawesome/free-solid-svg-icons";

  const Header = ({select})=>{ {
    return (
      <>
         <div className = " flex justify-center space-x-6 lg:items-center items-end text-2xl bg-slate-50 px-5 py-1 rounded-xl font-bold">
         <p className=' text-gray-700 max-sm:hidden'>Social Media Platforms:</p>
          <a href='https://www.facebook.com/profile.php?id=100094619656632&mibextid=ZbWKwL'><FontAwesomeIcon  icon={faFacebook} className=" text-blue-500 hover:scale-125"/></a>
          <a href='https://instagram.com/studyusa.experts?igshid=ZDc4ODBmNjlmNQ=='><FontAwesomeIcon  icon={faInstagram} className="hover:scale-125 text-[#c13584] rounded-md"/></a>
          <a href=' https://wa.me/message/JGTZIMMV5EDLH1'><FontAwesomeIcon  icon={faWhatsapp} className="hover:scale-125 text-green-500"/></a>
          <a href='https://instagram.com/studyusa.experts?igshid=ZDc4ODBmNjlmNQ=='><FontAwesomeIcon  icon={faLinkedin} className="hover:scale-125 text-blue-500"/></a>
          <a href='https://twitter.com/studyusaexperts'><FontAwesomeIcon  icon={faTwitter} className="hover:scale-125 text-blue-500"/></a>
          <a  href='https://calendar.app.google/nAbsG1nAi1bhpMq38'><FontAwesomeIcon  icon={faCalendar} className='hover:scale-125 text-blue-500 rounded-lg'/></a>
        </div>

         <div className="max-w-full sm:px-32 justify-center  max-sm:justify-items-center items-center sm:sticky top-0 z-20 grid grid-cols-1 sm:grid-cols-2 bg-[#0b2545] p-1 drop-shadow-lg">
            <div className="justify-center  relative items-center mx-5 h-16 w-36">
            <Image src = {logo} layout='fit' fill alt='Logo of company' quality={100}></Image>
             </div>
             <div className=" max-sm:mt-10  max-sm:justify-center justify-end relative items-center   max-sm:space-y-5 sm:flex ">
                {
                  select == 'home'? 
                  <Link href ="/">
                  <div  className="border-2 flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                    Home
                 </div>
                 </Link>
                 :
                 <Link href ="/">
                 <div  className='flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32 hover:cursor-pointer py-3 px-3 mx-2'>
                    Home
                 </div>
                 </Link>
                }
                
                 {
                  select == 'about' ?
                  <Link href ="/about">
                  <div className="border-2 flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                  About Us
                 </div>
                 </Link>
                 :
                 <Link href ="/about">
                  <div className=" flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                  About Us
                 </div>
                 </Link>
                 }
                 {
                  select == 'contact' ?
                  <Link href ="/contact"><div className="border-2 flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                  Contact Us
                 </div>
                 </Link>
                 :
                 <Link href ="/contact">
                  <div className=" flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                  Contact Us
                 </div>
                 </Link>
                 }
                
          
             </div>
          </div>
          </>
    )
  }
}

export default Header;