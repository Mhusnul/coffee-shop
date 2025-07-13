import React from "react";
import Button from "../common/Button";
import coffe from "../../assets/coffe-2.png";
import { Coffee, GlassWater, Milk, CupSoda } from "lucide-react";

function Hero() {
  return (
    <div className="flex justify-baseline items-center p-12 min-h-[80vh]">
      <div className="flex-1 max-w-2xl">
        <h1 className="text-7xl font-bold text-[#3e1f0d] leading-tight mb-8">
          Coffee
          <br />
          <span className="text-6xl">The Best For You</span>
        </h1>

        <Button className="rounded-full bg-[#3e1f0d] text-white px-8 py-4 text-lg font-semibold transition-colors shadow-lg mb-8">
          View Menu
        </Button>

        <div className="flex gap-4 mt-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/30">
            <span className="text-2xl">
              <Coffee color="#331700" />
            </span>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/30">
            <span className="text-2xl">
              <GlassWater color="#331700" />
            </span>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/30">
            <span className="text-2xl">
              <Milk color="#331700" />
            </span>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/30">
            <span className="text-2xl">
              <CupSoda color="#331700" />
            </span>
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <img src={coffe} alt="" />
      </div>
    </div>
  );
}

export default Hero;
