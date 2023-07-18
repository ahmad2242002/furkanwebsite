import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
    faLinkedin,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import {faHome,faInfo,faPhone, faLocationDot,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link.js';
export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className = " mt-36 px-28 py-14  bg-gray-100 grid grid-cols-1 lg:grid-cols-3 lg:justify-center justify-start">
            <div className = " flex flex-col space-y-4 my-3 lg:items-center items-start">
                <div className=' items-start space-y-4'>
                <li className = " text-xl font-bold list-none">Social Networks</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faFacebook} className=" text-blue-500"/> Facebook</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faInstagram} className=" text-purple-500"/> Instagram</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faWhatsapp} className=" text-green-500"/> Whatsapp</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faLinkedin} className=" text-blue-500"/> Linkedin</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faTwitter} className=" text-blue-500"/> Twitter</li>
                </div>
            </div>
            <div className = " flex flex-col space-y-4 my-3 lg:items-center items-start">
            <div className=' items-start space-y-4 '>
            <li className = " text-xl font-bold list-none">Address</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faLocationDot} className=" text-black me-2"/>117 B People Colony, near to Samosa chowk, D Ground, Faisalabad, 03822</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faEnvelope} className=" text-black me-2"/>consultancy@studyusaexpert.me</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faPhone} className=" text-black me-2"/>+92 3087139898</li>
                <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faPhone} className=" text-black me-2"/>+92 315 6910138</li>
                </div>
            </div>
            <div className = " flex flex-col space-y-4 my-3 lg:items-center items-start">
            <div className=' items-start space-y-4'>
            <li className = " text-xl font-bold list-none">Pages</li>
            <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faHome} className=" text-blue-500"/> <Link href ="/"> Home</Link></li>
            <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faInfo} className="  me-3 text-blue-500"/> <Link href ="/about">  About</Link> </li>
            <li className = "text-lg font-semibold list-none"><FontAwesomeIcon  icon={faPhone} className=" text-black"/> Contact US</li>
            </div>
            </div>
        </div>
    </footer>
    )
  }
}
