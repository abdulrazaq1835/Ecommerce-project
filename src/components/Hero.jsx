import React from 'react'
import {assets} from '../assets/assets'


const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-600'>
      

      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10'>
      <div className='text-gray-800 font-bold'>
        <div className='flex items-center  justify-center gap-2'>
               <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
         <p className='flex justify-center items-center'>OUR BESTSELLERS</p>
        </div>
        <h1 className='prata-regular text-3xl font-thin sm:py-3 leading-relaxed lg:text-5xl'>LATEST ARRIVALS</h1>
        <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>Shop now</p>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
        </div>
      </div>

     
      </div>
       {/* // Hero right side  */}
      <img src={assets.hero_img} className='w-full sm:w-1/2'/>                       
    </div>
  )
}

export default Hero
