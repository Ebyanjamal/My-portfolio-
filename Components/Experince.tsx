import React from 'react'
import {motion} from 'framer-motion'
import CodingCrd from './CodingCrd'

type Props = {}

export default function Experince({}: Props) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1}}
    transition={{ duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col test-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center bg-slate-800'>
        <h3 className= "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl" >life Experince </h3>

        <div className=''>
        <CodingCrd/>
        {/* <CodingCrd/>
        <CodingCrd/> */}
        </div> 
    </motion.div>
  )
}