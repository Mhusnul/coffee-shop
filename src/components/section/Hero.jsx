import React, { useRef } from "react";
import coffe from "../../assets/4.png";
import { motion, useInView } from "framer-motion";

function Hero({ id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id={id}
      ref={ref}
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${coffe})`,
      }}
    >
      <div className="hero-overlay bg-background/40"></div>
      <div className="hero-content text-foreground text-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 100 }}
        >
          <h1 className="mb-5 text-5xl md:text-xl lg:text-9xl font-bold uppercase">
            Friendly Atmosphere
          </h1>
          <p className="mb-5 italic">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors">Read more</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
