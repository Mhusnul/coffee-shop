import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/section/Hero";
import CoffeeBuild from "../components/section/CoffeeBuild";
import GridColaction from "../components/section/GridColaction";

function Home() {
  return (
    <div className="min-h-screen bg-[#4B352A]">
      <Navbar />
      <Hero />
      <CoffeeBuild />
      <GridColaction />
    </div>
  );
}

export default Home;
