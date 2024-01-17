import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion"



type Props = {}
export default function About({}: Props) {
  return (
    <div className=' flex flex-col relative h-screen text-center md:text-left md:flex-row
     h-screen maw-w-767px px-10 min-w-768 justify-center mx-auto items-center bg-[#f5f4ea]'>
   
  <button>   <img className="rounded-sm width-[500px " src='Name.png' />  </button>

 <motion.img 
 initial={{
    x:-200,
 }}
 
 whileInView={{x:0}}
 viewport={{once:true}}
 className='w-[320px] md:rounded-lg md:h-95 xl:x-[500px] '
 src=""
 />

<div className='space-y-10 px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4 max-w-767px  min-w-768px' >
    <h4 className='text-4xl font-semibold font-space text-black' >
    About me 
    </h4>
     <img src="text.2.png" alt="" />
    </div>
    
  </div>


     
  )
}

//Tracking is used for when I want to space out the words and give a look// 
//in the intial x -200 will place the image on the far left side of the page 
