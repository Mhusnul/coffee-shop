import React from "react";

import animate1 from "../../assets/animate-(2).png";
import animate2 from "../../assets/animate-(3).png";
import animate3 from "../../assets/animate-(4).png";
import grid1 from "../../assets/grid-1.png";
import logo from "../../assets/logo-coffe.png";
import { ArrowBigRightDash } from "lucide-react";

function Service({ id }) {
  return (
    <div
      id={id}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className=" bg-[#F0F2BD] hover:bg-[#B2CD9C] hover:text-[#F0F2BD] bg-backdrop-blur-lg p-5 flex items-center justify-center transition-colors duration-300">
          <div>
            <h3 className="uppercase font-bold mb-3 text-[#4B352A] ">
              Discover the Art of Brewing
            </h3>
            <p className="mb-3 text-sm ">
              Explore techniques that transform ordinary beans into
              extraordinary moments. Your perfect cup starts here.
            </p>
            <p className="uppercase font-semibold text-sm text-[#4B352A] flex items-center">
              Read More <ArrowBigRightDash size={28} strokeWidth={0.75} />
            </p>
          </div>
          <img className="h-52" src={animate1} alt="animasi" />
        </div>

        <div className=" bg-[#B2CD9C] hover:bg-[#F0F2BD] hover:text-[#B2CD9C] p-5 flex items-center justify-center transition-colors duration-300">
          <div>
            <h3 className="uppercase font-bold mb-3 text-[#4B352A] ">
              Master Every Pour
            </h3>
            <p className="mb-3 text-sm ">
              Learn how to bring out the true flavor of coffee with expert
              brewing methods. Easy steps, perfect results.
            </p>
            <p className="uppercase font-semibold text-sm text-[#4B352A] flex items-center">
              Read More <ArrowBigRightDash size={28} strokeWidth={0.75} />
            </p>
          </div>
          <img className="h-52" src={animate3} alt="" />
        </div>

        <div className=" bg-[#B2CD9C] hover:bg-[#F0F2BD] hover:text-[#F0F2BD] flex items-center justify-center h-80 overflow-hidden">
          <img className="" src={grid1} alt="" />
        </div>

        <div className=" bg-[#B2CD9C] hover:bg-[#F0F2BD] hover:text-[#B2CD9C] flex items-center justify-center h-80 transition-colors duration-300">
          <img className="h-72" src={logo} alt="" />
        </div>

        <div className=" bg-[#F0F2BD] flex items-center justify-center h-80 overflow-hidden">
          <img className="" src={grid1} alt="" />
        </div>

        <div className=" bg-[#F0F2BD] hover:bg-[#B2CD9C] hover:text-[#F0F2BD] p-5 flex items-center justify-center transition-colors duration-300">
          <div>
            <h3 className="uppercase font-bold mb-3 text-[#4B352A] ">
              From Bean to Brew
            </h3>
            <p className="mb-3 text-sm ">
              Trace the journey of every bean — from ethically sourced farms to
              your favorite cup. Taste the story behind every sip.
            </p>
            <p className="uppercase font-semibold text-sm text-[#4B352A] flex items-center">
              Read More <ArrowBigRightDash size={28} strokeWidth={0.75} />
            </p>
          </div>
          <img className="h-52" src={animate2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Service;
