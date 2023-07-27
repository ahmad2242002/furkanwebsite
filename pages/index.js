import Image from 'next/image'
import React, { useRef } from 'react';
import { Inter } from 'next/font/google'
import Footer from '../components/footer.js'
import Header from '@/components/header.js'
import background from '../images/background.jpg'
import '@fortawesome/fontawesome-svg-core/styles.css'
import waiting from '../images/waiting.jpg'
import Link from 'next/link.js';
import Gridcomponent from '@/components/gridcomponent.js'
import Locationcomponent from '@/components/locationcomponent.js'
import Counseling from '../images/counseling.jpg'
import Selection from '../images/selection.jpg'
import assistant from '../images/application.jpg'
import test from '../images/test.jpg'
import visa from '../images/visa.jpg'
import scholarship from '../images/scholarship.jpg'
import departure from '../images/departure.jpg'
import uk from '../images/uk.webp'
import usa from '../images/usa.jpg'
import swedan from '../images/sweden.jpg'
import germany from '../images/germany.jpg'
import austria from '../images/austria.jpg'
import canda from '../images/canada.jpg'
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTwitter,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,faArrowRight,faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const containerRef = useRef(null);

const scrollLeft = () => {
  containerRef.current.scrollLeft -= 400; // Change this value to control the scrolling distance
};

const scrollRight = () => {
  containerRef.current.scrollLeft += 400; // Change this value to control the scrolling distance
};
  return (
    <main className='bg-[#eef4ed]'>
    <Header select = 'home'/>
   <div className='relative flex flex-col items-center xl:items-start overflow-hidden sm:h-[800px] h-[400px]'>
   <Image className=' opacity-50 xl:opacity-95 ' src = {background} layout='fit' fill alt='backgroung image' quality={100}></Image>
   <div className='z-10 pt-20 xl:ps-10 space-y-8 flex flex-col items-center text-center'>
    <div className=" text-blue-900 text-3xl sm:text-5xl font-semibold">International Education Consultants</div>
    <div className="text-black text-lg sm:text-xl font-semibold">Your Gateway to World-Class Education</div>
        <div className="m-5">
        <Link href={'/contact'}>
            <button className="rounded-full hover:scale-110 px-10 py-4 hover:drop-shadow-2xl text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
            <FontAwesomeIcon  icon={faPhone} className='me-2'/>  Contact Us</button></Link>
        </div>
        </div>
   </div>
   <div className=' flex items-center justify-center my-5'>
   <div className = " flex space-x-6 sm:w-2/3 h-24 justify-evenly text-3xl items-center bg-[#134074] text-white px-2 sm:px-5 py-1 rounded-xl font-bold">
          <a href='https://www.facebook.com/profile.php?id=100094619656632&mibextid=ZbWKwL' className='hover:bg-blue-500 hover:text-white hover:translate-y-2 duration-200  hover:scale-125 h-12 w-12 text-black items-center justify-center flex bg-white rounded-full'><FontAwesomeIcon  icon={faFacebookF} className=" "/></a>
          <a href='https://instagram.com/studyusa.experts?igshid=ZDc4ODBmNjlmNQ==' className='hover:bg-[#c13584] hover:text-white hover:translate-y-2 duration-200  hover:scale-125 h-12 w-12 text-black items-center justify-center flex bg-white rounded-full'><FontAwesomeIcon  icon={faInstagram}/></a>
          <Link href={'/contact'} className='hover:bg-green-500 hover:text-white hover:translate-y-2 duration-200  hover:scale-125 h-12 w-12 text-black items-center justify-center flex bg-white rounded-full'><FontAwesomeIcon  icon={faWhatsapp}/></Link>
          <a href='https://instagram.com/studyusa.experts?igshid=ZDc4ODBmNjlmNQ==' className='hover:bg-blue-500 hover:text-white hover:translate-y-2 duration-200  hover:scale-125 h-12 w-12 text-black items-center justify-center flex bg-white rounded-full'><FontAwesomeIcon  icon={faLinkedin}/></a>
          <a href='https://twitter.com/studyusaexperts' className='hover:bg-blue-500 hover:text-white hover:translate-y-2 duration-200  hover:scale-125 h-12 w-12 text-black bg-white rounded-full items-center justify-center flex'><FontAwesomeIcon  icon={faTwitter}/></a>
          </div>
        </div>

        <div className='mx-5 sm:mx-32'>
        <div className=" text-3xl sm:text-5xl font-bold sm:ms-10 text-[#134074] pt-5 text-center">Our Services</div>
        <div className="grid grid-cols-1 text-[#134074] sm:grid-cols-2 xl:grid-cols-3 sm:space-x-10 space-y-10">
           <Gridcomponent heading = {"Personalized Counseling"} image = {Counseling} para= {"At StudyUSA Expert, we understand that every student is unique with distinct aspirations..."} link = {'./about'}></Gridcomponent>
           <Gridcomponent heading = {"University Selection"} image = {Selection} para= {"Choosing the right university is a crucial decision that can significantly impact your educational..."} link = {'./about'}></Gridcomponent>

           <Gridcomponent heading = {"Application Assistance"} image = {assistant} para= {"Navigating through the complex college application process can be overwhelming. Our experienced team will..."} link = {'./about'}></Gridcomponent>

           <Gridcomponent heading = {"Standardized Test Preparation"} image = {test} para= {"Standardized tests like the SAT, ACT, GRE, or TOEFL are essential requirements for many universities in the USA. Our specialized..."} link = {'./about'}></Gridcomponent>

           <Gridcomponent heading = {"Visa Support"} image = {visa} para= {"Obtaining a student visa is a critical step in your journey to study in the USA. Our team will provide you with all the necessary..."} link = {'./about'}></Gridcomponent>

           <Gridcomponent heading = {"Scholarship and Financial Aid Assistance"} image = {scholarship} para= {"We understand that financing your education abroad can be a concern for many students and their families..."} link = {'./about'}></Gridcomponent>

          <div></div>
           <Gridcomponent  heading = {"Pre-Departure Guidance"} image = {departure} para= {"As you prepare to embark on your educational journey, we provide comprehensive pre-departure guidance, including..."} link = {'./about'}></Gridcomponent>
           <br></br>
        </div>
        </div>
        <div className='bg-white rounded-xl border-b-2 drop-shadow-lg shadow-lg border-[#0b2545] h-auto w-100 lg:mx-44 md:mx-20 sm:mx-10 mx-5 my-20 items-center p-6 space-y-2 justify-center'>
        <div className=" text-[#134074]  md:text-5xl text-3xl font-bold text-center ">International Education Consultants</div>
   <div className=' grid grid-cols-1 sm:grid-cols-2 items-center'>
        <Image src = {waiting}  alt='image' quality={100}></Image>
        <div className='z-10 pt-10 sm:px-10 space-y-8 flex flex-col items-center '>
        <div className="text-black sm:text-lg text-sm  font-semibold text-justify ">StudyUSA Expert is a renowned educational consultancy firm committed to assisting students in pursuing higher education in the United States. With personalized counseling, university selection, application assistance, standardized test preparation, visa support, scholarship and financial aid assistance, and pre-departure guidance, they provide comprehensive guidance and support at every stage of the academic journey. Their experienced team aims to empower students with the knowledge and resources needed to make informed decisions, ensuring a smooth and successful transition to world-class education and future success.</div>
            <div className="m-5">
            <Link href={'/about'}>
                <button className="rounded-full hover:scale-110 px-5 sm:px-10 py-2 sm:py-4 hover:drop-shadow-2xl text-xs sm:text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
               About Us</button></Link>
            </div>
            </div>
    </div>
    </div>

    
    <div className=" text-3xl sm:text-5xl font-bold sm:ms-10 text-[#134074] pt-5 text-center">Popular Destinations For International Students</div>
    <div className="xl:px-44 lg:px-10 px-5 w-full  my-5  overflow-hidden">
    <div className=' flex justify-end space-x-5 text-xl text-white'>
        <FontAwesomeIcon icon={faArrowLeft} onClick={scrollLeft} className=' bg-slate-800 rounded-full p-1 cursor-pointer'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faArrowRight} onClick={scrollRight} className=' bg-slate-800 rounded-full p-1 cursor-pointer'></FontAwesomeIcon>
      </div>
        <div className="flex py-2 flex-nowrap overflow-x-scroll scroll-container scrollbar-hide space-x-5" ref={containerRef}>
        <div className="relative h-25 w-25 bg-white w-25 rounded-lg">
            <Locationcomponent  heading = {"Germany"} image = {germany} para= {"Germany's universities offer a strong emphasis on research and practical learning. It is becoming increasingly popular due to its tuition-free or low-tuition education, making it an attractive option for international students seeking affordability without compromising on quality. Additionally, Germany's diverse cities and cultural experiences make it an enriching study destination."}></Locationcomponent>
            </div>
            <div className="relative h-25 bg-white w-25 rounded-lg ">
            <Locationcomponent  heading = {"UK (United Kingdom)"} image = {uk} para= {"The UK's academic heritage and historic universities contribute to its global reputation for excellence. It offers diverse courses and a wide range of academic programs, especially in arts, humanities, and sciences. However, international students should be prepared for higher tuition fees and a competitive admission process."}></Locationcomponent>
            </div>
            <div className="relative h-25 w-25 bg-white w-25 rounded-lg">
            <Locationcomponent  heading = {"United States of America"} image = {usa} para= {"The USA offers a vast array of academic programs across various disciplines, attracting students from around the world. Renowned for its research facilities and faculty, it provides a high-quality education experience. However, tuition fees and living costs can be relatively high, making scholarships and financial planning essential for international students."}></Locationcomponent>
            </div>
            <div className="relative h-25 w-25 bg-white w-25 rounded-lg ">
            <Locationcomponent  heading = {"Canada"} image = {canda} para= {"Canada's warm and multicultural environment appeals to international students. The country is known for its strong emphasis on quality education, research opportunities, and industry connections. Additionally, the option to work part-time during studies and post-graduation work permits make it a popular choice for students seeking a balanced academic and work experience."}></Locationcomponent>
            </div>
            <div className="relative h-25 w-25 bg-white w-25 rounded-lg">
            <Locationcomponent  heading = {"Sweden"} image = {swedan} para= {"Sweden's education system emphasizes innovation, sustainability, and critical thinking. Many universities offer courses in English, making it accessible to international students. While education is tuition-free for EU/EEA students, non-EU/EEA students may find it relatively more affordable compared to other European countries, with numerous scholarship opportunities available"}></Locationcomponent>
            </div>
            <div className="relative h-25 w-25 bg-white w-25 rounded-lg">
            <Locationcomponent  heading = {"Austria"} image = {austria} para= {"Austria provides a rich cultural experience along with high-quality education. The country is particularly known for its music, arts, and engineering programs. Tuition fees for EU/EEA students are reasonable, and some universities offer financial aid to international students. The cost of living varies but can be managed with proper planning."}></Locationcomponent>
            </div>

        </div>
        </div>
    <Footer/>
   </main>

  )
  }
