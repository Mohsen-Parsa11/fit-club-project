import React from "react";
import Container from "./Container";
import whiteTick from "../assets/whiteTick.png";
import heartHealth from "../assets/heartHealth.svg";
import rightArrow from "../assets/rightArrow.png";
import dumbell from "../assets/dumbell.png";
import heart from "../assets/flame.svg";

function Plans() {
  return (
    <div id="plans" className="bgColor pt-10 lg:pt-0">
      <Container>
        <div>
          <div className="flex justify-center md:justify-between px-6 flex-col md:flex-row text-2xl lg:text-4xl uppercase font-bold">
            <h2 className="stroke text-center lg:text-left">ready to start</h2>
            <h2 className="text-white text-center lg:text-left">
              your journey
            </h2>
            <h2 className="stroke text-center lg:text-left">now withUs</h2>
          </div>

          <div className="pt-8 relative lg:pt-16 md:grid lg:grid-cols-3 md:grid-cols-2 px-6 space-y-6 lg:space-y-0 lg:px-20 gap-8">
            <div className="bg-orange-600 hidden lg:block w-80 h-52 right-0 absolute top-32 blur1 "></div>
            <div className="bg-gray-600 px-5 relative z-40  py-5 col-span-1">
              <div className="space-y-4 lg:space-y-7">
                <img src={heartHealth} className="w-10" alt="" />
                <h2 className="text-xl lg:text-2xl text-white font-semibold uppercase">
                  basic plan
                </h2>
                <p className="text-2xl lg:text-5xl text-white font-bold">$ 25</p>
                <div className="space-y-3">
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5 h-5" alt="" />
                    <p>2 hours of exercises</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5" alt="" />
                    <p>Free Consulation To Coaches</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5" alt="" />
                    <p>Cccess to the Comunity</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <p>See more benefits</p>
                    <img src={rightArrow} className="w-3 h-3 pt-1" alt="" />
                  </div>
                </div>
                <button className="bg-white px-4 py-2 font-semibold w-full">Join now</button>
              </div>
            </div>

            <div className="bg-gray-600 px-5 py-5 col-span-1 lg:scale-110 bg-gradient-to-t from-orange-400 to-orange-600">
              <div className="space-y-4 lg:space-y-7">
                <img src={heart} className="w-8" alt="" />
                <h2 className="text-xl lg:text-2xl text-white font-semibold uppercase">
                  permuim plan
                </h2>
                <p className="text-2xl lg:text-5xl text-white font-bold">$ 30</p>
                <div className="space-y-3">
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5 h-5" alt="" />
                    <p>2 hours of exercises</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5" alt="" />
                    <p>Free Consulation To Coaches</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5" alt="" />
                    <p>Cccess to the Comunity</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <p>See more benefits</p>
                    <img src={rightArrow} className="w-3 h-3 pt-1" alt="" />
                  </div>
                </div>
                <button className="bg-white px-4 py-2 font-semibold w-full text-orange-500">Join now</button>
              </div>
            </div>

            <div className="bg-orange-600 w-80 h-52 left-0 hidden lg:block absolute top-32 blur1 "></div>
            <div className="bg-gray-600 px-5 z-30 relative py-5 col-span-1">
              <div className="space-y-4 lg:space-y-7">
                <img src={dumbell} className="w-10" alt="" />
                <h2 className="text-xl lg:text-2xl text-white font-semibold uppercase">
                  pro plan
                </h2>
                <p className="text-2xl lg:text-5xl text-white font-bold">$ 40</p>
                <div className="space-y-3">
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5 h-5" alt="" />
                    <p>2 hours of exercises</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5" alt="" />
                    <p>Free Consulation To Coaches</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <img src={whiteTick} className="w-5" alt="" />
                    <p>Cccess to the Comunity</p>
                  </div>
                  <div className="flex text-white items-center space-x-4">
                    <p>See more benefits</p>
                    <img src={rightArrow} className="w-3 h-3 pt-1" alt="" />
                  </div>
                </div>
                <button className="bg-white px-4 py-2 font-semibold w-full">Join now</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Plans;
