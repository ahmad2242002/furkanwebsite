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
         <div className="max-w-full justify-center items-center sm:sticky top-0 z-20 grid grid-cols-1 sm:grid-cols-2 bg-blue-950 p-2 drop-shadow-lg">
            <div className="justify-center relative items-center mx-5 h-24 w-36">
            <Image src = {logo} layout='fit' fill alt='Logo of company' quality={100}></Image>
             </div>
             <div className=" max-sm:mt-10 justify-end items-center  max-sm:space-y-5 sm:flex h-auto w-full block flex-grow">
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
          
    )
  }
}

export default Header;