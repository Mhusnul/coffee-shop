import React, { useRef } from "react";
import cup from "../../assets/coffe-cup.png";
import { animate, motion, stagger, useInView } from "framer-motion";

import {
  Croissant,
  Sandwich,
  Pizza,
  CupSoda,
  Coffee,
  Beer,
} from "lucide-react";

function CoffeeBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  const leftItems = [
    {
      icon: Croissant,
      title: "Butter Croissant",
      desc: "Freshly baked buttery croissant with crispy layers.",
    },
    {
      icon: Sandwich,
      title: "Turkey Sandwich",
      desc: "Savory turkey, cheese, and greens in sourdough bread.",
    },
    {
      icon: Pizza,
      title: "Mini Pizza",
      desc: "Personal-size pizza with mozzarella & tomato sauce.",
    },
  ];

  const rightItems = [
    {
      icon: CupSoda,
      title: "Iced Latte",
      desc: "Cold brew espresso with chilled milk and foam.",
    },
    {
      icon: Coffee,
      title: "Classic Americano",
      desc: "Smooth black coffee with rich crema.",
    },
    {
      icon: Beer,
      title: "Craft Kombucha",
      desc: "Refreshing fermented tea with fruity taste.",
    },
  ];

  return (
    <div className="text-center py-5 px-5  min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-[#B2CD9C] font-semibold italic">What Happens Here</h1>
      <p className="text-4xl font-bold text-[#F0F2BD]">COFFE BUILD YOUR BASE</p>
      <hr className=" w-16 mt-4 text-[#F0F2BD] mx-auto" />
      <div className=" md:flex justify-center items-center my-5">
        {/* Left Side */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="md:text-right flex flex-col gap-2 items-center"
        >
          {leftItems.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="md:flex md:flex-row-reverse items-center gap-2"
            >
              <Icon
                size={80}
                strokeWidth={0.75}
                className="text-[#F0F2BD] mx-auto"
              />
              <div className="w-80">
                <h1 className="text-lg font-bold uppercase text-[#F0F2BD] ">
                  {title}
                </h1>
                <p className="text-[#B2CD9C]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Middle Image */}
        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-center items-center"
        >
          <img src={cup} alt="coffee-cup" className="w-80" />
        </motion.div>

        {/* Right Side */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="md:text-left flex flex-col gap-2 items-center"
        >
          {rightItems.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="md:flex items-center gap-2"
            >
              <Icon
                size={80}
                strokeWidth={0.75}
                className="text-[#F0F2BD] mx-auto"
              />
              <div className="w-80">
                <h1 className="text-lg font-bold uppercase text-[#F0F2BD] ">
                  {title}
                </h1>
                <p className="text-[#B2CD9C]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CoffeeBuild;
