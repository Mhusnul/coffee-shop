import React from "react";
import { motion } from "framer-motion";

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
      className="min-h-screen flex flex-col justify-center items-center bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="bg-accent hover:bg-primary hover:text-accent-foreground p-5 flex items-center justify-center transition-colors duration-300 rounded-lg">
          <div>
            <h3 className="uppercase font-bold mb-3 text-accent-foreground">
              Discover the Art of Brewing
            </h3>
            <p className="mb-3 text-sm text-accent-foreground">
              Explore techniques that transform ordinary beans into
              extraordinary moments. Your perfect cup starts here.
            </p>
            <p className="uppercase font-semibold text-sm text-accent-foreground flex items-center">
              Read More <ArrowBigRightDash size={28} strokeWidth={0.75} />
            </p>
          </div>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="h-52"
            src={animate1}
            alt="animasi"
          />
        </div>

        <div className="bg-primary hover:bg-accent hover:text-primary text-primary-foreground p-5 flex items-center justify-center transition-colors duration-300 rounded-lg">
          <div>
            <h3 className="uppercase font-bold mb-3">
              Master Every Pour
            </h3>
            <p className="mb-3 text-sm">
              Learn how to bring out the true flavor of coffee with expert
              brewing methods. Easy steps, perfect results.
            </p>
            <p className="uppercase font-semibold text-sm flex items-center">
              Read More <ArrowBigRightDash size={28} strokeWidth={0.75} />
            </p>
          </div>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="h-52"
            src={animate3}
            alt=""
          />
        </div>

        <div className="bg-muted hover:bg-card flex items-center justify-center h-80 overflow-hidden rounded-lg transition-colors duration-300">
          <img className="" src={grid1} alt="" />
        </div>

        <div className="bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center h-80 transition-colors duration-300 rounded-lg">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="h-72"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="bg-accent flex items-center justify-center h-80 overflow-hidden rounded-lg">
          <img className="" src={grid1} alt="" />
        </div>

        <div className="bg-accent hover:bg-primary hover:text-primary-foreground text-accent-foreground p-5 flex items-center justify-center transition-colors duration-300 rounded-lg">
          <div>
            <h3 className="uppercase font-bold mb-3">
              From Bean to Brew
            </h3>
            <p className="mb-3 text-sm">
              Trace the journey of every bean — from ethically sourced farms to
              your favorite cup. Taste the story behind every sip.
            </p>
            <p className="uppercase font-semibold text-sm flex items-center">
              Read More <ArrowBigRightDash size={28} strokeWidth={0.75} />
            </p>
          </div>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="h-52"
            src={animate2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
