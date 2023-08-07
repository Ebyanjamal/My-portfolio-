import React from 'react'
import SkillsCard from './SkillsCard'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=' h-screen flex relative overflow-hidden flex-col test-lft md:flex-row max-w-full px-10 bg-[#b4abca] justify-evenly mx-auto items-center  '>
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-white text-2xl text-center'> My Expertise </h3>
      <div>
        <SkillsCard/>
      </div>
    </motion.div>
    
  )
}

export default Skills
