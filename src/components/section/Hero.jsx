import React from "react";
import coffe from "../../assets/4.png";

function Hero({ id }) {
  return (
    <div
      id={id}
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${coffe})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-[#F0F2BD] text-center">
        <div>
          <h1 className="mb-5 text-5xl md:text-xl lg:text-9xl font-bold uppercase">
            Friendly Atmosphere
          </h1>
          <p className="mb-5 italic">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          </p>
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
