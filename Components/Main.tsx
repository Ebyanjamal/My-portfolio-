import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Background from './Background'
import {motion} from 'framer-motion'
import Link from 'next/link'
import About from './About'


type Props = {}

export default function Main({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Welcome",
      "مرحباً",
      "soo dhawoow",
      "ברוך הבא",
      "To Ebyan's Coding Journey"
    ],
    loop: true,
    delaySpeed: 1000
  })
  return (
    <div className='bg-black back h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'> 
      <h1 className='text-5xl lg:text-6xl font-semibold px-10  '>
        <span className='text-white font-weight-600 font-bold font-space ' >{text}</span>
        <Cursor cursorColor='black'/>
      </h1>
      <Background/>
      <motion.div 
          initial={{
            opacity: 0, 
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1 ,0.2 ,0.4 ,0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration:1.9
        }}> 
        
      <img  
      className='w-full object-contain rounded-lg mx-auto blur:sm-hover object-cover mt-2'
      src=''
      alt="" />
      </motion.div>
      <div className='z-20'>
        <h2 className='text-xl uppercase pb-2 tracking-[5px] mt-2 text-white font-space font-semibold' >Front End Software Engineer </h2>
      <div className='mt- 25 '>
        <Link href="#About"> 
        <motion.button 
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        className=' rounded-full mainButton hover:outline outline-offset-2 outline-1 text-white font-bold font-space '> About </motion.button>
        </Link>
        <Link href='#Experince'>
        <motion.button 
                 whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
        className=' rounded-full mainButton hover:outline outline-offset-2 outline-1 text-white font-semibold font-space'>Experince</motion.button>
         </Link>
         <Link href='#Skills'> 
        <motion.button 
                 whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
        className=' rounded-full mainButton hover:outline outline-offset-2 outline-1 text-white font-semibold font-space'>Skills</motion.button>
        </Link>
      </div>
      </div>
    </div>
  )
} 