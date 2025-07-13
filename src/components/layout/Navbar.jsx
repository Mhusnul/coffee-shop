import React from "react";
import Button from "../common/Button";
import { Coffee } from "lucide-react";

function Navbar() {
  return (
    <div className="flex justify-between p-4 w-full backdrop-blur-sm bg-white/10 border-b border-white/20">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-0.5">
          <span className="text-2xl font-bold text-[#3e1f0d]">Flavored</span>
          <span className="text-white font-bold">
            <Coffee color="#331700" />
          </span>
        </div>
        <span className="text-sm text-[#3e1f0d]/70">
          Wake up to something special.
        </span>
      </div>

      <div className="flex gap-8 font-semibold text-[#3e1f0d] items-center">
        <a href="" className="hover:text-amber-800 transition-colors">
          Home
        </a>
        <a href="" className="hover:text-amber-800 transition-colors">
          Coffee Menu
        </a>
        <a href="" className="hover:text-amber-800 transition-colors">
          About Us
        </a>
        <a href="" className="hover:text-amber-800 transition-colors">
          Contact us
        </a>
        <Button className="rounded-full bg-[#3e1f0d] text-white px-6 py-2 transition-colors">
          Coffee Shop
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
