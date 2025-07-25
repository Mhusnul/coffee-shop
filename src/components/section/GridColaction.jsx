import React from "react";
import grid1 from "../../assets/grid-1.png";
import grid2 from "../../assets/grid-2.png";
import grid3 from "../../assets/grid-3.png";
import grid4 from "../../assets/6.png";
import { animate, motion, stagger, useInView } from "framer-motion";

function GridColaction({ id }) {
  return (
    <div id={id} className="md:h-[600px]">
      <div className="grid grid-cols-6 gap-1 p-4 h-full">
        <div className="col-span-3 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={grid1}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="col-span-2 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={grid2}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className=" grid gap-1 col-span-1">
          <div className="overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={grid3}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          <div className="overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={grid4}
              alt=""
              className="object-cover h-full w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridColaction;
