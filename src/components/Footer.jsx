import React from "react";
import Container from "./Container";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bgColor pt-20 relative py-20">
      <div className="w-1vh h-1 bg-white relative z-40 "></div>
      <Container>
        <div>
        <div className="h-40 w-80 md:w-[750px] lg:w-[1000px] absolute top-[40%] bg-orange-600 blur1"></div>
          <div className="pt-20 space-y-14 relative z-30">
            <div className="flex justify-center space-x-10 lg:space-x-24">
              <a href="#">
                <img src={github} className="w-10 h-10" alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={linkedin} alt="" className="w-10 h-10" />
              </a>
            </div>
            <div>
              <img src={logo} className="w-40 mx-auto mt-10" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
