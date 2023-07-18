import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../components/footer.js'
import Header from '@/components/header.js'
import background from '../images/background.jpg'
import '@fortawesome/fontawesome-svg-core/styles.css'
import waiting from '../images/waiting.jpg'
import Link from 'next/link.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <Header select = 'home'/>
   <div className='relative flex flex-col items-start overflow-hidden sm:h-[700px] h-[400px]'>
   <Image className=' opacity-30 xl:opacity-100 ' src = {background} layout='fit' fill alt='backgroung image' quality={100}></Image>
   <div className='z-10 pt-20 ps-10 space-y-8 flex flex-col items-center'>
    <div className=" text-blue-900 text-3xl sm:text-5xl font-semibold">International Education Consultants</div>
    <div className="text-black text-xl font-semibold">Study USA Expert: Your Gateway to World-Class Education</div>
        <div className="m-5">
        <Link href={'/contact'}>
            <button className="rounded-full hover:scale-110 px-10 py-4 hover:drop-shadow-2xl text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
            <FontAwesomeIcon  icon={faPhone} className='me-2'/>  Contact Us</button></Link>
        </div>
        </div>
   </div>
   <div className=' grid grid-cols-1 sm:grid-cols-2 h-auto w-100 lg:mx-44 md:mx-20 sm:mx-10 mx-5 my-20'>
        <div className=' relative max-sm:h-72'>
        <Image src = {waiting} layout='fit' fill alt='image' className=' rounded-lg' quality={100}></Image>
        </div>
        <div className='z-10 pt-20 ps-10 space-y-8 flex flex-col items-center'>
        <div className=" text-yellow-500 md:text-5xl text-3xl font-semibold">International Education Consultants</div>
        <div className="text-black text-lg font-semibold">StudyUSA Expert is a renowned educational consultancy firm committed to assisting students in pursuing higher education in the United States. With personalized counseling, university selection, application assistance, standardized test preparation, visa support, scholarship and financial aid assistance, and pre-departure guidance, they provide comprehensive guidance and support at every stage of the academic journey. Their experienced team aims to empower students with the knowledge and resources needed to make informed decisions, ensuring a smooth and successful transition to world-class education and future success.</div>
            <div className="m-5">
            <Link href={'/about'}>
                <button className="rounded-full hover:scale-110 px-5 sm:px-10 py-2 sm:py-4 hover:drop-shadow-2xl text-xs sm:text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
               About Us</button></Link>
            </div>
            </div>
    </div>

    <Footer/>
   </main>

  )
  }
