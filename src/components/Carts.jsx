import React from "react";
import Container from "./Container";
import dumble from "../assets/dumbell.svg"
import runing from "../assets/runing.svg"
import rightArrow  from "../assets/rightArrow.png"
import heartHealth from "../assets/heartHealth.svg"
import flame from "../assets/flame.svg"


function Carts() {
  return (
    <div className="bgColor lg:pt-14" id="programs">
      <Container>
        <div className="text-2xl lg:text-4xl font-bold uppercase flex flex-col md:flex-row justify-center md:justify-between text-white px-6">
            <p className="stroke text-center lg:text-left">explore our</p>
            <p className="text-center lg:text-left">programs</p>
            <p className="stroke text-center lg:text-left">to share you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0 gap-4 mt-8">
            <div className="flex flex-col space-y-4 hover:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all duration-700 text-white bg-gray-400 opacity-85 py-5 px-6">
                <img className="w-10" src={dumble} alt="" />

                <h2 className="capitalize text-lg ">strength training</h2>
                <p>In this program, you are train to improve your strength to through many exercises. </p>

                <button className="space-x-6 text-left cursor-pointer"><span>Join now</span> <img src={rightArrow} className="w-4 inline-block" alt="" /></button>
            </div>
            <div className="flex flex-col space-y-4 hover:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all duration-700 text-white bg-gray-400 opacity-85 py-5 px-6">
                <img className="w-10" src={runing} alt="" />

                <h2 className="capitalize text-lg ">cardio training</h2>
                <p>In this program, you are train to improve your strength to through many exercises.</p>

                <button className="space-x-6 text-left cursor-pointer"><span>Join now</span> <img src={rightArrow} className="w-4 inline-block" alt="" /></button>
            </div>
            <div className="flex flex-col space-y-4 hover:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all duration-700 text-white bg-gray-400 opacity-85 py-5 px-6">
                <img className="w-8" style={{fill: "red"}} src={flame} alt="" />

                <h2 className="capitalize text-lg ">fat burning</h2>
                <p>In this program, you are train to improve your strength to through many exercises.</p>

                <button className="space-x-6 text-left cursor-pointer"><span>Join now</span> <img src={rightArrow} className="w-4 inline-block" alt="" /></button>
            </div>
            <div className="flex flex-col space-y-4 hover:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all duration-700 text-white bg-gray-400 opacity-85 py-5 px-6">
                <img className="w-10" src={heartHealth} alt="" />

                <h2 className="capitalize text-lg ">health fitness</h2>
                <p>In this program, you are train to improve your strength to through many exercises.</p>

                <button className="space-x-6 text-left cursor-pointer"><span>Join now</span> <img src={rightArrow} className="w-4 inline-block" alt="" /></button>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Carts;
