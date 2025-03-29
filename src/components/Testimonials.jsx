import React, { useState } from 'react'
import Container from './Container'
import {testimonialsData} from "../data/testimonialsData"
import rightArrow from "../assets/rightArrow.png"
import leftArrow from "../assets/leftArrow.png"

function Testimonials() {

    const [selected, setSelected] = useState(0);
    const tLength= testimonialsData.length;

  return (
    <div id='testimonials' className='bgColor pt-16'>
        <Container>
            <div className='md:grid grid-cols-2 gap-20 px-6 lg:px-0'>
                <div className='m-0 col-span-1'>
                    <h4 className='text-[16px] lg:text-xl uppercase font-bold text-orange-500 text-center md:text-left'>testimonials</h4>
                    <div className='pt-6 space-y-2 md:space-y-5 text-center md:text-left'>
                        <h3 className='text-2xl md:text-3xl lg:text-5xl uppercase font-bold stroke'>what they</h3>
                        <h3 className='text-2xl md:text-3xl lg:text-5xl tracking-wide uppercase font-bold text-white'>say about us</h3>
                    </div>
                    
                    <div className='space-y-2 mt-3 md:mt-8 text-center md:text-left'>
                        <p className='text-bold text-[16px] lg:text-lg text-white'>{testimonialsData[selected]?.review}</p>
                    </div>
                    <h3 className='uppercase text-[16px] md:text-lg mt-4 text-white text-center md:text-left '><span className='text-orange-500'>{testimonialsData[selected]?.name}{" "}</span>-<span>{" "}{testimonialsData[selected]?.status}</span></h3>
                   
                </div>

                {/* images */}
                <div className='col-span-1 relative px-6 lg:px-0'>
                    <div className='w-52 lg:w-60 h-52 lg:h-70 bg-transparent border-2 border-orange-400 absolute left-4 md:left-9 lg:left-20 xl:left-32 -top-4 md:top-4 lg:top-7 xl:top-5'></div>
                    <div  className='w-52 lg:w-70 h-52 lg:h-60 bg-orange-500 z-30  absolute right-4 md:right-10 lg:right-22 xl:right-34 top-4 md:top-14 lg:top-22 xl:top-26'></div>
                    <img src={testimonialsData[selected].image} className='w-52 lg:w-70 h-52 lg:h-70 mx-auto mt-10 object-cover relative z-40' alt="" />
                    <div className='flex items-center justify-center lg:justify-start pt-12 lg:pt-0  flex-row space-x-2'> 
                        <img src={leftArrow} onClick={()=>{
                            selected === 0? setSelected(tLength - 1): setSelected(prev=>prev-1)
                        }}
                          className='w-5 cursor-pointer' alt="" />
                        
                        <img src={rightArrow} onClick={()=>{
                            selected === tLength-1? setSelected(0): setSelected(prev=>prev+1)
                        }} className='w-5 cursor-pointer' alt="" />
                    </div>
                </div>
            </div>

            <div className='flex px-6 space-y-5 md:space-y-0 lg:px-0 flex-col md:flex-row justify-center md:justify-between mt-16'>
                <div>
                    <div className='border-b border-4 border-orange-400 w-40 mb-3 '></div>
                    <div className="space-y-2">
                        <p className='text-white text-2xl lg:text-5xl uppercase font-bold'><span className='stroke'>ready to</span> <span>level up</span></p>
                        <p className='text-white text-2xl lg:text-5xl uppercase font-bold'><span>your body</span> <span className='stroke'>with us</span></p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-gray-400 pr-3 w-90 py-3 items-center flex justify-between'>
                    <input type="text" className='w-full text-white placeholder:text-white placeholder:text-xs lg:placeholder:text-[16px] px-3 border-0 outline-0 bg-transparent' placeholder='Enter your Email Addres here'/>
                    <button className='bg-amber-500 px-4 py-2 text-white flex text-nowrap'>Join now</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials