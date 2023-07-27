import React, { Component } from 'react'
import Image from 'next/image'

function Gridcomponent2(props) {
    return (
        <div className='flex flex-col items-center p-4 sm:p-10 bg-white rounded-xl shadow-lg drop-shadow-lg sm:ms-10 mt-10 hover:translate-y-3 hover:cursor-pointer duration-200 hover:border-2 hover:border-[#0b2545] border-b-4 border-blue-900'>
         <div className=' relative w-56 h-56 mb-5'>
        <Image src = {props.image} layout='fit' fill alt='backgroung image 2' className=' rounded-full shadow-lg shadow-slate-600 ' quality={100}></Image>
        </div>
        <h1 className=' font-bold text-[#134074] sm:text-3xl text-2xl'>{props.heading}</h1>
        <br></br>
        <p className=' text-justify font-semibold text-gray-600  text-base sm:text-lg pb-3'>{props.para}</p>
   </div>
    )
}

export default Gridcomponent2