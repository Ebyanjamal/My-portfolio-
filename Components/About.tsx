import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion"



type Props = {}
export default function About({}: Props) {
  return (
    <div className=' flex flex-col relative h-screen text-center md:text-left md:flex-row
     h-screen maw-w-7xl px-10 justify-center mx-auto items-center bg-[#fed7aa]'>

    {/* <motion.h3 
    className='absolute top-24 uppercase tracking-[10px] text-black text-2xl'> BIO </motion.h3> */}
 
 <motion.img 
 initial={{
    x:-200,
 }}
 
 whileInView={{x:0}}
 viewport={{once:true}}
 className='w-[320px] md:rounded-lg md:h-95 xl:x-[500px] '
 src="https://wallpapercave.com/wp/wp9641787.jpg"
 alt="Picture of the author"
 />

<div className='space-y-10 px-0 md:px-10 ' >
    <h4 className='text-4xl font-semibold' >
    About me 
    </h4>
    <p className='text-base'>
Hello, I'm Ebyan, an enthusiastic, kind, and outgoing front-end software engineer based in Denver, CO. Coding is not just a career path I chose; it's also a beloved and cherished hobby of mine.

I specialize in building intellectual applications from scratch to production, leveraging JavaScript frameworks such as React, Next.js, TypeScript, and more! With a strong foundation in these technologies, I thrive in creating seamless and responsive user experiences.

My passion for design and aesthetics is deeply rooted in my upbringing. Growing up as the only girl among three boys, I had the unique opportunity to explore my creativity by decorating and designing alongside my mother. These childhood experiences have honed my attention to detail and fueled my ability to create visually appealing interfaces.

I am driven by a genuine love for blending creativity with technical skills to craft exceptional user interfaces. From concept to implementation, I strive to deliver elegant solutions that not only meet functional requirements but also leave a lasting impression on users.

If you're seeking a front-end software engineer who is not only skilled but also brings a fresh perspective and a passion for creating visually captivating interfaces, I would be thrilled to contribute my expertise to your team.

    </p>

</div>

 </div>

     
  )
}

//Tracking is used for when I want to space out the words and give a look// 
//in the intial x -200 will place the image on the far left side of the page 
