import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/section/Hero";
import CoffeeBuild from "../components/section/CoffeeBuild";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CoffeeBuild />
    </div>
  );
}

export default Home;
