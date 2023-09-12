import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function SkillsCard({}: Props) {
  return (
    <div className='flex flex-wrap space-x-5 ' >
      <article className=' object-left-top hover:scale-110'>
        <motion.img 
         initial={{ y: -100 , opacity: 0,}}
         transition={{duration:1.2}}
         whileInView={{ opacity:1, y:0}}
         viewport={{ once:true}}
         className='h-35 w-32 rounded-full xl:w-[200px] xl:h-[200px] rounded-full hover:fill-white transition duration-300 ease-in-out'
         src='data:image/png;base64,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'/>  
         <div className=''>
            {/* <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>75%</p>
            </div> */}
          </div>
          </article>
      <article className='object-right-top hover:scale-110'>
        <motion.img
        initial={{ y: -100 , opacity: 0,}}
        transition={{duration:1.2}}
        whileInView={{ opacity:1, y:0}}
        viewport={{ once:true}}
        className='h-32 w-32  xl:w-[200px] xl:h-[200px] rounded-full  hover: transition duration-300 ease-in-out'
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHumh9JXUB_ht3o2bajpYCFj_VTAkOpVSBw&usqp=CAU"alt="" />
      </article>

      <article className='hover:scale-110'>
        <motion.img 
        className='h-35 w-32 rounded-full xl:w-[200px] xl:h-[200px]  hover:grayscale transition duration-300 ease-in-out'
         initial={{ y: -100 , opacity: 0,}}
         transition={{duration:1.2}}
         whileInView={{ opacity:1, y:0}}
         viewport={{ once:true}}
        src="data:image/png;base64,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" alt="" />
      </article>
      <article className='hover:scale-110'> 
      <motion.img
       initial={{ y: -100 , opacity: 0,}}
       transition={{duration:1.2}}
       whileInView={{ opacity:1, y:0}}
       viewport={{ once:true}}
       className='h-32 w-35 hover:scale-110 rounded-full xl:w-[200px] xl:h-[200px]  hover:grayscale transition duration-300 ease-in-out' 
      src="data:image/png;base64,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" alt="" />
    </article>
    <article className='hover:scale-110'>
      <motion.img 
      className='rounded-full h-32 w-32 hover:grayscale transition duration-300 ease-in-out'
            initial={{ y: -100 , opacity: 0,}}
            transition={{duration:1.2}}
            whileInView={{ opacity:1, y:0}}
            viewport={{ once:true}}
      src="data:image/jpeg;base64,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" alt="" />
      </article>   
 

    <article className='hover:scale-110'>
      <motion.img 
      className='object-cover h-32 w-35 hover:scale-110 rounded-full xl:w-[200px] xl:h-[200px]  hover:grayscale transition duration-300 ease-in-out'
         initial={{ y: -100 , opacity: 0,}}
         transition={{duration:1.2}}
         whileInView={{ opacity:1, y:0}}
         viewport={{ once:true}}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiHj38ePmVdjXh88iph8ABrTz5sjwAcBT7A&usqp=CAU" alt="" />
    </article>


    <article className='hover:scale-110'>
      <motion.img
       initial={{ y: -100 , opacity: 0,}}
       transition={{duration:1.2}}
       whileInView={{ opacity:1, y:0}}
       viewport={{ once:true}}
       className='mt-[20px] rounded-full xl:w-[200px] xl:h-[200px] h-32 w-32 hover:grayscale transition duration-300 ease-in-out'
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB4CAMAAACwwFz4AAAAilBMVEUAAAApKSkyMjLR0dGFhYVLS0vp6eleXl7y8vLV1dWoqKiQkJAgICBbW1vl5eVDQ0NmZmYZGRnExMShoaGWlpZwcHBtOiAJCQmvr696enre3t5SUlJLKBYRERE7Ozv6+vo2HRBeMhwhEQoYDQcvGQ5TLRl2PyOMSypBIxO7u7soFQyjVzF/RCaYUS2WI9FBAAADSElEQVR4nO3Zi3KiMBQG4BNIQLlIMAkS8FqLVpe+/+stiAi1TrfTMgW65xtvkNg5f42QIABCCCGEEEIIIYQQQgghhBBCCCGEEPrfLRZ9V9A5o+8COse8vivoWuD3XUHXQtp3BV3z5K87NlDVdwVdU07fFXSNzfuu4NNI2N5aGY3Qax2yvblf7SXV0+qn6/w8z4zbmyoxb7g9JbeGWJJL07TqMGc/XumnEWumW5s0WbMagfltsGkTVmmxL9Cb4NIYPvhbA0Fm/qw1y6HTdmOYXM9ELKnHoD/5ocK+jlhEtr74byNBuqkG2NSt99ijiATmreD7SOAm5aPThB5JpCC5Db37SCtTAHCr2TGSSNAMvftIsJgoz2odQMYSCeb1hJQmRn3AW1d71NRsTxtGE2mdBNWm3syurPp8Nd+0+48mEujr0KPmfQc9m55am+OJVA+9d98lsLRhtabgI4oEs8sZ6F2kcr5EN81CaRSRrvMCdRl695HE5bwUN8OxicSMVA9yBXWLBKdy6N1FMibV1QbrwexBpTJNh7jObSLBNLiPRCb1HG9jX3e1IrFA0CGuMVqR+HxxF+l0OwXL5PriGokxKVLqx0OckJNJs84TLlCLuleSUauZo5vzaozZ1VnKI4QBsYf4IUHoNmV5psGEU4tTaTf9iKjireVPV/g9xniuL3yadv/dZ2wc8u8+YyN+3YV8YIOcEHwPD/quoHt8iKfP7wl/4ccU/r4jBAxxeo0QQggh1DGDq+DNwuhpu3t51DF72lcvQmU/aq8MYSnMZayFy8CvLj2ejy/Px20W7Z62hy3sdtm+eLrI4ZhdXkj7BJyGSvO1ogtwWaiK97psoVzg8QAWJCGhQLlIpSqvn2R/zgAR7I67w0txi6Ioz/Jt2e9Y3PPyAWTxf6A2dWjsOwEVhmAioI4vWMxoIIcwd08FyHWcnmj5m+WiyLF/fSoe8/zwuszz7Hg4PBcN26hIFJ3LN4hA+5pTwR3f0VSsZep6wnGLZAtnJYMBDD2uPcW0Z9Pq58vzfhm9LJfb5TLK9uU9ugy38vu1rd5gUA5KGyrwuWt7nmsTFfCQcqLXCjQdwsf0gSz/sNmXg7xsjBBCCCGEEEIIIYQQQl/wFw1pKw/UNrCeAAAAAElFTkSuQmCC " alt="" />
    </article>

    <article className='hover:scale-110'>
      <motion.img
         initial={{ y: -100 , opacity: 0,}}
         transition={{duration:1.2}}
         whileInView={{ opacity:1, y:0}}
         viewport={{ once:true}}
         className='h-32 w-35 mt-[20px] rounded-full xl:w-[200px] xl:h-[200px]  hover:grayscale transition duration-300 ease-in-out'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxk8D0ycM6qcGE6lUkmkBTo0KQ_XhnATYtHw&usqp=CAU" alt="" />
    </article>

    <article className='hover:scale-110'>
      <motion.img 
         initial={{ y: -100 , opacity: 0,}}
         transition={{duration:1.2}}
         whileInView={{ opacity:1, y:0}}
         viewport={{ once:true}}
         className='h-32 w-35 mt-[20px] rounded-full hover:grayscale transition duration-300 ease-in-out'
      src="data:image/png;base64,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" alt="" />
    </article>
    </div>

   )
}