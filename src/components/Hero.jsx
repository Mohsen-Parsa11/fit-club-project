import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import heart from "../assets/heart.png";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import calories from "../assets/calories.png";
import close from "../assets/close3.png";
import menu from "../assets/bars.png";
import {motion} from "framer-motion"
import CountUp from "react-countup";


function Hero() {
  const [closeMenu, setCloseMenu] = useState("hidden");
  const handleClickOpenMenu= ()=>{
      setCloseMenu("block")
  }
  const handleClickCloseMenu= ()=>{
      setCloseMenu("hidden")
  }


  return (
    <div className="bgColor lg:h-screen" id="hero">
      <div className="blur bg-orange-500  absolute h-90 w-60 lg:w-90"></div>

      <Container>
      <div className="sticky md:relative top-0 z-50">
       <div className="flex items-center md:space-x-10 justify-between md:justify-center lg:justify-start lg:space-x-48 py-6 mb-5 lg:mb-0">
          <div>
            <img src={logo} alt="" className="w-36 ml-4 lg:ml-0"/>
          </div>
          {/* menu */}
          <ul className="md:flex hidden space-x-8 items-center text-white">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#whyUs">why Us</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
          <img onClick={handleClickOpenMenu} src={menu} className="w-11 md:hidden h-5 cursor-pointer pr-4" alt="" />
        </div>

        {/* mobile menu */}
        <div className={`${closeMenu} fixed bg-sky-950 py-10 top-5 right-2 rounded-2xl z-50 px-4`}>
          <img onClick={handleClickCloseMenu} src={close} className="w-4  absolute top-5 right-5 cursor-pointer" alt="" />
        <ul className="space-y-3 text-white">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#whyUs">why Us</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
        </ul>
       </div>
       </div>

        <div className="flex flex-col lg:flex-row justify-between">
            <div className="my-4">
                <div className="bg-slate-700 mx-auto lg:mx-0 relative w-[260px] rounded-full py-1">
                <h4 className=" text-white relative z-40 rounded-full py-2 px-2 uppercase text-sm w-[260px]">the best fitness club in the town</h4>
                <motion.div initial={{top:3, left:200}} animate={{left:1,top: 3}} transition={{duration:3}} className="w-16 h-9 absolute top-0 left-1 bg-orange-400 rounded-full"></motion.div>
                </div>

                <motion.div initial={{y:"2rem",opacity:0}} animate={{y:0 ,opacity:1}} transition={{duration:2}}>
                <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold uppercase text-white mt-9"><span className="stroke">shape</span> your</h1>
                <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold uppercase mt-2 lg:mt-5 text-white">ideal body</h1>
                </motion.div>
                <p className="my-6 text-white text-center lg:text-left w-xs text-sm lg:text-[16px] lg:w-full mx-auto lg:mx-0">In here we will help you to shape and build your ideal body and live up your life to <span>fullest</span></p>
                
            <div className="flex justify-center lg:justify-normal space-x-8 my-8">
              <div>
                  <span className="text-xl lg:text-3xl text-white">+</span> <span className="text-xl lg:text-3xl font-bold text-white"><CountUp start={100} end={135} duration={4}></CountUp></span>
                  <p className="uppercase text-gray-400 text-xs lg:text-[16px] flex flex-col lg:flex-row"><span>expert</span> <span>coaches</span></p>
              </div>

              <div>
                  <span className="text-white text-xl lg:text-3xl">+</span> <span className="text-xl lg:text-3xl font-bold text-white"><CountUp start={880} end={978} duration={4}></CountUp></span>
                  <p className="uppercase text-gray-400 text-xs lg:text-[16px] flex flex-col lg:flex-row"><span>members</span> <span>joined</span></p>
                </div>

                <div>
                  <span className="text-xl lg:text-3xl text-white">+</span> <span className="text-xl lg:text-3xl font-bold text-white"><CountUp end={30} duration={4}></CountUp></span>
                  <p className="uppercase text-gray-400 text-xs lg:text-[16px] flex flex-col lg:flex-row"><span>fitness</span><span>programs</span></p>
                </div>
            </div>

              <div className="space-x-4 flex justify-center lg:justify-normal">
                <button className="capitalize active:scale-98 transition duration-150 text-white bg-amber-500 px-2 lg:px-5 py-1 lg:py-2 cursor-pointer">get started</button>
                <button className="capitalize active:scale-98 transition duration-150 text-white bg-transparent border-2 border-amber-500 cursor-pointer px-2 lg:px-5 py-1 lg:py-2">learn more</button>
              </div>
            </div>

            <div className="lg:bg-amber-500 mb-20 lg:mb-0 lg:h-screen lg:w-90 lg:absolute right-0 top-0">
              <button className="bg-white px-3 py-2 capitalize ml-40 mt-8 cursor-pointer active:scale-98">joine now</button>
              <motion.div initial={{x:"2rem"}} animate={{x:0}} transition={{duration:2}} className="bg-gray-700 hidden py-2 lg:py-4 space-y-1 lg:space-y-4 px-5 absolute right-20 lg:block rounded w-28 lg:w-40 mt-6 lg:ml-40">
                <img src={heart} className="w-5 lg:w-8 ml-3 lg:ml-0" alt="" />
                <p className="capitalize text-xs text-slate-500 lg:text-lg font-bold">heart rate</p>
                <p className="text-white lg:text-xl">116 bpm</p>
              </motion.div>

              <motion.img initial={{x:'4rem'}} transition={{duration:2}} animate={{x:0}} src={hero_image_back} className="lg:absolute w-40 top-12 -left-50" alt="" />
              <img src={hero_image} className="absolute -bottom-[400px] lg:bottom-0 lg:top-20  right-10 lg:right-48 w-50 lg:w-80 lg:h-[450px]" alt="" />

              <motion.div initial={{x:0}} animate={{x:"2rem"}} transition={{duration:2}} className="flex xl:hidden bg-gray-500 rounded-xl px-4 py-2 space-x-4 absolute bottom-28 -left-80">
                <img src={calories} alt="" className="w-10 h-16" />
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm">Calories burned</p>
                  <p className="text-2xl text-white">220 Kcal</p>
                </div>
              </motion.div>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
