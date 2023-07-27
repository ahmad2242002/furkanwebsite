import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "../components/footer.js";
import Header from "@/components/header.js";
import background from "../images/background2.jpg";
import Counseling from "../images/counseling.jpg";
import Selection from "../images/selection.jpg";
import assistant from "../images/application.jpg";
import test from "../images/test.jpg";
import visa from "../images/visa.jpg";
import scholarship from "../images/scholarship.jpg";
import departure from "../images/departure.jpg";
import waiting from "../images/waiting.jpg";
import Link from "next/link.js";
import Gridcomponent2 from "@/components/gridcomponent2.js";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-[#eef4ed]">
      <Header select="about" />
      <div className="relative flex flex-col items-center overflow-hidden sm:h-[700px] h-[400px]">
        <Image
          src={background}
          layout="fit"
          fill
          alt="backgroung image"
          quality={100}
        ></Image>
        <div className="z-10 pt-24 space-y-8 flex flex-col items-center">
          <div className=" text-blue-900 text-2xl sm:text-4xl  lg:text-7xl font-semibold animate-bounce">
            Welcome to StudyUSA EXPERTS
          </div>
          <div className="m-5">
            <Link href={"/contact"}>
              <button className="rounded-full hover:scale-110 px-6 sm:px-10 py-3 sm:py-4 hover:drop-shadow-2xl text-xs sm:text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
                <FontAwesomeIcon icon={faPhone} className="me-2" /> Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:mx-44 md:mx-20 sm:mx-10 mx-5 my-5">
        <div className="text-black sm:text-xl text-base font-semibold text-justify my-10  p-10 rounded-lg bg-[#8da9c4] ">
          A leading educational consultancy firm dedicated to helping students
          fulfill their dreams of pursuing higher education in the United
          States. With years of experience and a team of highly skilled
          professionals, we are committed to providing comprehensive guidance
          and support to students at every step of their journey towards
          academic success.
        </div>
        <div className="sm:text-5xl text-3xl font-semibold my-8 p-1 bg-blue-950 text-white rounded-lg text-center py-3">Our Core Services</div>
        <div className="grid grid-cols-1 sm:grid-cols-2  sm:space-x-10 space-y-10">
        <Gridcomponent2  heading = {"Personalized Counseling"} image = {Counseling} para= {"At StudyUSA Expert, we understand that every student is unique with distinct aspirations and academic backgrounds. Our expert counselors take the time to understand your goals, interests, and  preferences to provide personalized guidance that aligns with your academic and career aspirations"}></Gridcomponent2>

        <Gridcomponent2  heading = {"University Selection"} image = {Selection} para= {"Choosing the right university is a crucial decision that can significantly impact your educational experience and future opportunities. Our team of seasoned experts will assist you in exploring a wide range of accredited institutions and help you identify the ones that best suit your academic goals and financial capabilities"}></Gridcomponent2>

        <Gridcomponent2  heading = {"Application Assistance"} image = {assistant} para= {" Navigating through the complex college application process can be overwhelming. Our experienced team will guide you through the entire application process, ensuring that all necessary documents are submitted accurately and on time. From preparing your application materials to reviewing essays and securing letters of recommendation, we&apos;ve got you covered"}></Gridcomponent2>

        <Gridcomponent2  heading = {"Standardized Test Preparation"} image = {test} para= {"Standardized tests like the SAT, ACT, GRE, or TOEFL are essential requirements for many universities in the USA. Our specialized test preparation programs are designed to equip you with the skills and confidence needed to excel in these exams, boosting your chances of admission to your dream university"}></Gridcomponent2>

        <Gridcomponent2  heading = {"Visa Support"} image = {visa} para= {" Obtaining a student visa is a critical step in your journey to study in the USA. Our team will provide you with all the necessary information and documentation to streamline the visa application process, ensuring a smooth and hassle-free experience"}></Gridcomponent2>

        <Gridcomponent2  heading = {"Scholarship and Financial Aid Assistance"} image = {scholarship} para= {"We understand that financing your education abroad can be a concern for many students and their families. StudyUSA Expert will help you explore various scholarship opportunities and financial aid options to make your dream of studying in the USA more affordable"}></Gridcomponent2>

        <Gridcomponent2  heading = {"Pre-Departure Guidance"} image = {departure} para= {"As you prepare to embark on your educational journey, we provide comprehensive pre-departure guidance, including information on accommodation, cultural adaptation, and life in the USA. Our aim is to ensure that you feel confident and well-prepared for your exciting new chapter"}></Gridcomponent2>

          <br></br>
        </div>
      </div>

      <div className='bg-white rounded-xl border-b-2 drop-shadow-lg shadow-lg border-[#0b2545] h-auto w-100 lg:mx-44 md:mx-20 sm:mx-10 mx-5 my-20 items-center p-6 space-y-2 justify-center'>
        <div className=" text-[#134074]  md:text-5xl text-3xl font-bold text-center ">International Education Consultants</div>
   <div className=' grid grid-cols-1 sm:grid-cols-2 items-center'>
        <Image src = {waiting}  alt='image' quality={100}></Image>
        <div className='z-10 pt-10 sm:px-10 space-y-8 flex flex-col items-center '>
        <div className="text-black sm:text-lg text-sm font-semibold text-justify ">StudyUSA Expert is a renowned educational consultancy firm committed to assisting students in pursuing higher education in the United States. With personalized counseling, university selection, application assistance, standardized test preparation, visa support, scholarship and financial aid assistance, and pre-departure guidance, they provide comprehensive guidance and support at every stage of the academic journey. Their experienced team aims to empower students with the knowledge and resources needed to make informed decisions, ensuring a smooth and successful transition to world-class education and future success.</div>
        <div className="m-5">
            <Link href={"/contact"}>
              <button className="rounded-full hover:scale-110 px-5 sm:px-10 py-2 sm:py-4 hover:drop-shadow-2xl text-xs sm:text-base text-white font-bold  bg-blue-950 drop-shadow-md active:scale-90 transition duration-200">
                <FontAwesomeIcon icon={faPhone} className="sm:me-2" /> Contact
                Us
              </button>
            </Link>
          </div>
    </div>
    </div>
    </div>
      <Footer />
    </main>
  );
}
