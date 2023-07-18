import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../components/footer.js'
import Header from '@/components/header.js'
import call from '../images/call.png'
import email from '../images/email.png'
import visit from '../images/visit.webp'


import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot
  } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' '>
    <Header select = 'contact'/>
   <div className="lg:mx-44 md:mx-20 sm:mx-10 mx-5 my-5 flex flex-col justify-center items-center">
        <div className="text-6xl flex font-semibold m-auto items-center">Contact Us</div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:space-x-10 space-y-10">
           <div className='flex flex-col items-start p-5 border-b-4 border-blue-900 sm:ms-10 mt-10 bg-slate-300 rounded-3xl'>
                <h1 className=' font-bold text-3xl'>By Phone us</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {call} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center text-2xl font-semibold  pb-3'>Call to find out more</p>
                <p className=' text-start text-lg font-semibold pb-3'>Contact no 1</p>
                <p className=' text-start font-normal   pb-3'><FontAwesomeIcon  icon={faPhone} className=" text-black me-2"/> +92 3087139898</p>
                <p className=' text-start text-lg font-semibold pb-3'>Contact no 2</p>
                <p className=' text-start font-normal  pb-3'><FontAwesomeIcon  icon={faPhone} className=" text-black me-2"/> +92 315 6910138</p>
           </div>
           <div className='flex flex-col items-start p-5 border-b-4 border-blue-900 bg-slate-300 rounded-3xl'>
                <h1 className=' font-bold text-3xl'>By Email us</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {email} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center text-2xl font-semibold  pb-3'>Email us to find out more</p>
                <p className=' text-start text-lg font-semibold pb-3'>Email</p>
                <p className=' text-start font-normal   pb-3'><FontAwesomeIcon  icon={faEnvelope} className=" text-black me-2"/> consultancy@studyusaexpert.me</p>
           </div>
           <div className='flex flex-col items-start p-5 border-b-4 border-blue-900 bg-slate-300 rounded-3xl'>
                <h1 className=' font-bold text-3xl'>By Visiting us</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {visit} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center text-2xl font-semibold  pb-3'>Visit us to find out more</p>
                <p className=' text-start text-lg font-semibold pb-3'>Address</p>
                <p className=' text-start font-normal   pb-3'><FontAwesomeIcon  icon={faLocationDot} className=" text-black me-2"/>117 B People Colony, near to Samosa chowk, D Ground, Faisalabad, 03822</p>
           </div>
           <br></br>
        </div>
    </div>
    <Footer/>
   </main>

  )
  }
