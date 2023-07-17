import React, { Component } from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCalender from './calender.js'
import Image from 'next/image'
import logo from '../images/logo.png'
import Link from 'next/link.js';
import {
    faMagnifyingGlass,
    faGlobe,
    faBars,
    faUser,
    faUserGroup,
  } from "@fortawesome/free-solid-svg-icons";
import { document } from 'postcss';

  const Header = ({select})=>{ {
    return (
         <div className="max-w-full justify-center items-center sticky top-0 z-20 grid grid-cols-2 bg-blue-950 p-2 drop-shadow-lg">
            <div className="justify-center relative items-center mx-5 h-28 w-56">
            <Image src = {logo} layout='fit' fill alt='Logo of company' quality={100}></Image>
             </div>
             <div className="flex justify-end items-center mx-1 h-full">
                {
                  select == 'home'? 
                  <div  className='border-2 flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32 hover:cursor-pointer'>
                    <Link href ="/">Home</Link>
                 </div>
                 :
                 <div  className='flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32 hover:cursor-pointer'>
                    <Link href = "/">Home</Link>
                 </div>
                }
                
                 {
                  select == 'about' ?
                  <div className="border-2 flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                  <Link href ="/about">About Us</Link>
                 </div>
                 :
                  <div className=" flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                  <Link href ="/about">About Us</Link>
                 </div>
                 }
                

                 <div className=" flex items-center justify-center text-white rounded-lg hover:scale-105 hover:text-black text-lg font-semibold hover:bg-slate-100 h-1/2 w-32  hover:cursor-pointer py-3 px-3 mx-2">
                     Contact Us
                 </div>
          
             </div>
          </div>
    )
  }
}

export default Header;