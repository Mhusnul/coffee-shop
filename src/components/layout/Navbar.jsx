import React from "react";
import Button from "../common/Button";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between p-4 w-full fixed top-0 z-50 bg-white/10 backdrop-blur-sm">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-0.5">
          <span className="text-2xl font-bold text-[#F0F2BD]">Flavored</span>
          <span className="text-white font-bold">
            <img className="h-9" src={logo} alt="Logo" />
          </span>
        </div>
      </div>

      <div className="flex gap-8 font-semibold text-[#F0F2BD] items-center">
        <a href="" className="hover:text-[#B2CD9C] transition-colors ">
          Home
        </a>
        <a href="" className="hover:text-[#B2CD9C] transition-colors ">
          Coffee Menu
        </a>
        <a href="" className="hover:text-[#B2CD9C] transition-colors ">
          About Us
        </a>
        <a href="" className="hover:text-[#B2CD9C] transition-colors ">
          Contact us
        </a>
        <Button className="rounded-full px-6 py-2">Coffee Shop</Button>
      </div>
    </div>
  );
}

export default Navbar;
