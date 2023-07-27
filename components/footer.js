import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
    faLinkedin,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import {faHome,faInfo,faPhone, faLocationDot,faEnvelope, faCalendar} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link.js';
import Image from 'next/image'
import logo from '../images/logo.png'
export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className='px-10 sm:px-28 justify-center bg-[#0b2545] text-slate-50 space-y-7'>
        <div className='flex flex-col text-center items-center pt-10 space-y-6'>
          <Image src={logo} height={150} width={200} alt='logo image'></Image>
          <p className='text-base text-center sm:w-2/5'>&quot;The firm is dedicated to helping students pursue higher education in the US by providing comprehensive guidance and support.&quot;</p>
          <div className = " flex space-x-6 lg:items-center items-start text-2xl bg-slate-50 px-5 py-1 rounded-xl font-bold">
          <a href='https://www.facebook.com/profile.php?id=100094619656632&mibextid=ZbWKwL'><FontAwesomeIcon  icon={faFacebook} className=" text-blue-500 hover:scale-125"/></a>
          <a href='https://instagram.com/studyusa.experts?igshid=ZDc4ODBmNjlmNQ=='><FontAwesomeIcon  icon={faInstagram} className="hover:scale-125 text-[#c13584] rounded-md"/></a>
          <a href="https://wa.me/message/JGTZIMMV5EDLH1"><FontAwesomeIcon  icon={faWhatsapp} className="hover:scale-125 text-green-500"/></a>
          <a href='https://www.linkedin.com/company/studyusa-experts/'><FontAwesomeIcon  icon={faLinkedin} className="hover:scale-125 text-blue-500"/></a>
          <a href='https://twitter.com/studyusaexperts'><FontAwesomeIcon  icon={faTwitter} className="hover:scale-125 text-blue-500"/></a>
          </div>
        </div>
        <hr></hr>
        <div className = "  pb-5 grid grid-cols-1  max-lg:space-y-10 lg:grid-cols-3 lg:justify-evenly justify-start">
            <div className = " flex flex-col space-y-4 my-3 lg:items-center items-start">
                <div className=' items-start space-y-4'>
                <li className = " text-3xl font-bold list-none">Social Networks</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faFacebook} className=" text-blue-500"/><a href='https://www.facebook.com/profile.php?id=100094619656632&mibextid=ZbWKwL' target="_blank"> Facebook</a></li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faInstagram} className=" text-purple-500"/><a href='https://instagram.com/studyusa.experts?igshid=ZDc4ODBmNjlmNQ==' target="_blank"> Instagram</a></li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faWhatsapp} className=" text-green-500"/><a href=' https://wa.me/message/JGTZIMMV5EDLH1'> Whatsapp</a></li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faLinkedin} className=" text-blue-500"/><a href='https://www.linkedin.com/company/studyusa-experts/'> Linkedin</a></li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faTwitter} className=" text-blue-500"/><a href='https://twitter.com/studyusaexperts' target="_blank"> Twitter</a></li>
                </div>
            </div>
            <div className = " flex flex-col space-y-4 my-3 lg:items-center items-start">
            <div className=' items-start space-y-4 text-sm sm:text-base'>
            <li className = " text-3xl font-bold list-none">Address</li>
                <a href='https://g.co/kgs/yc3JVJ' target="_blank"><li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faLocationDot} className=" text-white me-2"/>117 B People Colony, near to Samosa chowk, D Ground, Faisalabad, 03822</li></a>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faEnvelope} className=" text-white me-2"/><a href="mailto:consultancy@studyusaexpert.me">consultancy@studyusaexpert.me</a></li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faPhone} className=" text-white me-2"/>+92 3087139898</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faPhone} className=" text-white me-2"/>+92 315 6910138</li>
                <li className = "text-lg font-semibold list-none"><a target="_blank" href='https://calendar.app.google/nAbsG1nAi1bhpMq38'><FontAwesomeIcon  icon={faCalendar} className=" text-white me-2"/>Book Appointment</a></li>
                </div>
            </div>
            <div className = " flex flex-col space-y-4 my-3 lg:items-center items-start">
            <div className=' items-start space-y-4'>
            <li className = " text-3xl font-bold list-none">Pages</li>
            <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faHome} className=" text-blue-500"/> <Link href ="/"> Home</Link></li>
            <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faInfo} className="  me-3 text-blue-500"/> <Link href ="/about">  About</Link> </li>
            <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faPhone} className=" text-white"/> <Link href={'/contact'}>Contact US</Link></li>
            </div>
            </div>
        </div>
        </div>
    </footer>
    )
  }
}
