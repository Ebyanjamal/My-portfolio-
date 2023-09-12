import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
type Props = {}

export default function Contact({}: Props) {
  return (
    <div className=' bg-[rgb(159,83,140)] h-screen flex relative overflow-hidden flex-col test-lft md:flex-row max-w-full px-10 bg-back justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-grey-500 text-2xl'> Contact </h3>
        <div className='space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>Lets Put These Skills To Work.{" "}
            </h4>

    <div className='space-y-10'> 
        <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className=' text-white h-7 w-7 animate-pulse'/>
                <p className='text-2xl' >+(720)-620-8656</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className=' text-white h-7 w-7 animate-pulse'/>
                <p className='text-2xl' >Ebyanjamal6@gmail.com</p>
         </div>

        <div className='flex items center space-x-5 justify-center'>
                <MapPinIcon className='h-7 w-7 animate-pulse text-white'/>
                <p className=' text-xl'>Denver, CO</p>
        </div>

         </div>
        </div>
    </div>
  )
}