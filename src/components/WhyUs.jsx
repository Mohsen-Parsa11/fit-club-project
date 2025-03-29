import React from 'react'
import Container from './Container'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import tick from "../assets/tick.png"
import nb from "../assets/nb.png"
import adidas from "../assets/adidas.png"
import nike from "../assets/nike.png"

function WhyUs() {
  return (
    <div className='bgColor pt-20' id='whyUs'>
        <Container>
            <div className='md:grid grid-cols-12 gap-6'>
                <div className='md:grid grid-cols-3 space-y-4 lg:space-y-0 px-6 lg:px-0 grid-rows-2 gap-4 col-span-7'> 
                    <img src={image1} alt="" className='col-span-1 row-span-2 h-90 lg:h-[464px] w-full'/>
                    <img src={image2} alt="" className='col-span-2 row-span-1 w-full h-68'/>
                    <img src={image3} alt="" className='col-span-1 row-span-1 w-full h-44'/>
                    <img src={image4} alt="" className='col-span-1 row-span-1 w-full h-44'/>
                </div>

                <div className='col-span-5 space-y-4 px-6 lg:px-0 pt-6 lg:pt-0'>
                    <h4 className='text-xl text-amber-600 font-bold uppercase'>some reasons</h4>
                    <h2 className='text-3xl lg:text-5xl text-white uppercase font-semibold'><span className='stroke'>why</span> choose us?</h2>
                    <div className='flex space-x-4'>
                        <img src={tick} alt="" className='w-6 h-6'/>
                        <p className='uppercase text-lg text-white md:font-semibold'>over 140+ expert coachs</p>
                    </div>
                    <div className='flex space-x-4'>
                        <img src={tick} alt="" className='w-6 h-6'/>
                        <p className='uppercase text-lg text-white md:font-semibold'>try smarter and faster than before</p>
                    </div>
                    <div className='flex space-x-4'>
                        <img src={tick} alt="" className='w-6 h-6'/>
                        <p className='uppercase text-lg text-white md:font-semibold'>1 free program for new member</p>
                    </div>
                    <div className='flex space-x-4'>
                        <img src={tick} alt="" className='w-6 h-6'/>
                        <p className='uppercase text-lg text-white md:font-semibold'>reiable partners</p>
                    </div>

                    <div>
                        <p className='uppercase text-[#9c9c9c] text-lg'>our partners</p>
                        <div className='flex space-x-4 pt-6'>
                            <img src={nb} alt="" className='w-12'/>
                            <img src={adidas} alt="" className='w-12'/>
                            <img src={nike} alt="" className='w-12'/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default WhyUs