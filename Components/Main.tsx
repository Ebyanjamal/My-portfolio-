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
    <div className='bg-[#fed7aa] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'> 
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
      className='rounded h-10 w-70 mx-auto blur:sm-hover object-cover mt-2'
      src="data:image/jpeg;base64,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" 
      alt="" />
      </motion.div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px] mt-2 text-purple-600' >Front End Software Engineer </h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10  '>
        <span className='text-black-300 font-weight-600 font-bold font-mono' >{text}</span>
        <Cursor cursorColor='black'/>
      </h1>
      <div className='mt- 25 '>
        <Link href="#About"> 
        <motion.button 
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        className='mainButton hover:outline outline-offset-2 outline-1'> About </motion.button>
        </Link>
        <Link href='#Experince'>
        <motion.button 
                 whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
        className='mainButton hover:outline outline-offset-2 outline-1'>Experince</motion.button>
         </Link>
         <Link href='#Skills'> 
        <motion.button 
                 whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
        className='mainButton hover:outline outline-offset-2 outline-1'>Skills</motion.button>
        </Link>
        <motion.button 
                 whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
        className='mainButton hover:outline outline-offset-2 outline-1'>Projects</motion.button>
      </div>
      </div>
    </div>
  )
} 