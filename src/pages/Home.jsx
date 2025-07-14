import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/section/Hero";
import CoffeeBuild from "../components/section/CoffeeBuild";
import GridColaction from "../components/section/GridColaction";
import Menu from "../components/section/Menu";
import Service from "../components/section/Service";
import Quotes from "../components/section/Quotes";
import Footer from "../components/layout/Footer";
import Brand from "../components/section/Brand";

function Home() {
  return (
    <div className="min-h-screen bg-[#4B352A] -z-50">
      <Navbar />
      <Hero />
      <CoffeeBuild />
      <GridColaction />
      <Menu />
      <Service />
      <Quotes />
      <Brand />
      <Footer />
    </div>
  );
}

export default Home;
