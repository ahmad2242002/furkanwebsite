import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../components/footer.js'
import Header from '@/components/header.js'
import background from '../images/background2.jpg'
import Counseling from '../images/Counseling.jpg'
import Selection from '../images/selection.jpg'
import assistant from '../images/application.jpg'
import test from '../images/test.jpg'
import visa from '../images/visa.jpg'
import scholarship from '../images/scholarship.jpg'
import departure from '../images/departure.jpg'
import waiting from '../images/waiting.jpg'


import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <Header select = 'about'/>
   <div className='relative flex flex-col items-center overflow-hidden h-[700px]'>
   <Image src = {background} layout='fit' fill alt='backgroung image' quality={100}></Image>
   <div className='z-10 pt-24 space-y-8 flex flex-col items-center'>
   <div className=" text-yellow-500 text-7xl font-semibold animate-bounce">Welcome to StudyUSA Expert</div>
        <div className="m-5">
            <button className="rounded-full hover:scale-110 px-10 py-4 hover:drop-shadow-2xl text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
            <FontAwesomeIcon  icon={faPhone} className='me-2'/>  Contact Us</button>
        </div>
        </div>
   </div>
   <div className="lg:mx-44 md:mx-20 sm:mx-10 mx-5 my-5">
   <div className="text-black text-xl font-semibold text-justify my-10 mt-24">
     A leading educational consultancy firm dedicated to helping students fulfill their dreams of pursuing higher education in the United States. With years of experience and a team of highly skilled professionals, we are committed to providing comprehensive guidance and support to students at every step of their journey towards academic success.
    </div>
        <div className="text-5xl font-semibold my-8 p-1">Our Core Survices</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 space-x-10 space-y-10">
           <div className='flex flex-col items-center p-5 border-b-4 border-blue-900 ms-10 mt-10'>
                <h1 className=' font-bold text-xl'>Personalized Counseling</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {Counseling} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center font-normal  pb-3'>At StudyUSA Expert, we understand that every student is unique with distinct aspirations and academic backgrounds. Our expert counselors take the time to understand your goals, interests, and preferences to provide personalized guidance that aligns with your academic and career aspirations</p>
           </div>
           <div className='flex flex-col items-center p-5 border-b-4 border-blue-900'>
                <h1 className=' font-bold text-xl'>University Selection</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {Selection} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center font-normal  pb-3'>Choosing the right university is a crucial decision that can significantly impact your educational experience and future opportunities. Our team of seasoned experts will assist you in exploring a wide range of accredited institutions and help you identify the ones that best suit your academic goals and financial capabilities</p>
           </div>
           <div className='flex flex-col items-center p-5 border-b-4 border-blue-900'>
                <h1 className=' font-bold text-xl'>Application Assistance</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {assistant} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center font-normal   pb-3'>Navigating through the complex college application process can be overwhelming. Our experienced team will guide you through the entire application process, ensuring that all necessary documents are submitted accurately and on time. From preparing your application materials to reviewing essays and securing letters of recommendation, we&apos;ve got you covered</p>
           </div>
           <div className='flex flex-col items-center p-5 border-b-4 border-blue-900'>
                <h1 className=' font-bold text-xl'>Standardized Test Preparation</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {test} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center font-normal   pb-3 '>Standardized tests like the SAT, ACT, GRE, or TOEFL are essential requirements for many universities in the USA. Our specialized test preparation programs are designed to equip you with the skills and confidence needed to excel in these exams, boosting your chances of admission to your dream university</p>
           </div>
           <div className='flex flex-col items-center p-5 border-b-4 border-blue-900'>
                <h1 className=' font-bold text-xl'>Visa Support</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {visa} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center font-normal   pb-3 '> Obtaining a student visa is a critical step in your journey to study in the USA. Our team will provide you with all the necessary information and documentation to streamline the visa application process, ensuring a smooth and hassle-free experience</p>
           </div>
           <div className='flex flex-col items-center p-5 border-b-4 border-blue-900'>
                <h1 className=' text-center font-bold text-xl'>Scholarship and Financial Aid Assistance</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {scholarship} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center font-normal   pb-3 '>We understand that financing your education abroad can be a concern for many students and their families. StudyUSA Expert will help you explore various scholarship opportunities and financial aid options to make your dream of studying in the USA more affordable</p>
           </div>
           <div className='flex flex-col items-center p-5 border-b-4 border-blue-900'>
                <h1 className=' font-bold text-xl'>Pre-Departure Guidance</h1>
                <br></br>
                <div className=' relative w-full h-48 mb-5'>
                <Image src = {departure} layout='fit' fill alt='backgroung image 2' className=' rounded-lg' quality={100}></Image>
                </div>
                <p className=' text-center font-normal   pb-3 '>As you prepare to embark on your educational journey, we provide comprehensive pre-departure guidance, including information on accommodation, cultural adaptation, and life in the USA. Our aim is to ensure that you feel confident and well-prepared for your exciting new chapter</p>
           </div>
           <br></br>
        </div>
    </div>
    <div className=' grid grid-cols-2 h-auto w-100 lg:mx-44 md:mx-20 sm:mx-10 mx-5 my-20'>
        <div className=' relative'>
        <Image src = {waiting} layout='fit' fill alt='image' className=' rounded-lg' quality={100}></Image>
        </div>
        <div className='z-10 pt-20 ps-10 space-y-8 flex flex-col items-center'>
        <div className=" text-yellow-500 text-5xl font-semibold">International Education Consultants</div>
        <div className="text-black text-lg font-semibold">StudyUSA Expert is a renowned educational consultancy firm committed to assisting students in pursuing higher education in the United States. With personalized counseling, university selection, application assistance, standardized test preparation, visa support, scholarship and financial aid assistance, and pre-departure guidance, they provide comprehensive guidance and support at every stage of the academic journey. Their experienced team aims to empower students with the knowledge and resources needed to make informed decisions, ensuring a smooth and successful transition to world-class education and future success.</div>
            <div className="m-5">
                <button className="rounded-full hover:scale-110 px-10 py-4 hover:drop-shadow-2xl text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
                <FontAwesomeIcon  icon={faPhone} className='me-2'/>  Contact Us</button>
            </div>
            </div>
    </div>
    <Footer/>
   </main>

  )
  }
