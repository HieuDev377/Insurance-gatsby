import React from "react";
import Hero from "../components/Home/Hero";
import Customer from "../components/Home/Customer";
import CTASection from "../components/Global/CTASection";
import AboutUsSection from "../components/Home/AboutUsSection";
import Footer from "../components/Global/Footer";
import "../styles/index.scss";

const GridSection = () => {
  return (
    <>
      <Hero />
      <Customer />
      <AboutUsSection />
      <CTASection />
      <Footer />
    </>    
  )
};

export default GridSection;

export const Head = () => <title>Home</title>