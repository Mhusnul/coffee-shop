import React from "react";
import layout from "../../assets/cofe-3.png";

function Brand({ id }) {
  return (
    <div id={id} className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src={layout}
        alt="brand-bg"
        className="absolute blur-xs h-full w-full object-cover "
      />

      {/* Content */}
      <div className=" relative flex flex-col justify-center items-center h-full text-center text-[#F0F2BD] px-4 z-50">
        <h2 className="text-xl font-semibold italic mb-2">Our Signature</h2>
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
          BRAND VALUES
        </h1>
        <hr className="w-16 border-amber-300 mb-6" />
        <p className="max-w-2xl text-base md:text-lg text-[#fdfde3]">
          We don’t just serve coffee we craft experiences. Our brand represents
          warmth, passion, and the pursuit of perfect moments. From bean to cup,
          every detail is intentional.
        </p>
      </div>
    </div>
  );
}

export default Brand;
