import React from "react";
import HeroSection from "../components/HereSection";
import CustomerSection from "../components/CustomerSection";
import AboutUsSection from "../components/AboutUsSection";
import InsurancePlan from "../components/InsurancePlan";
import StorySection from "../components/StorySection";
import Footer from "../components/Footer";
import "../styles/index.scss";

const GridSection = () => {
  return (
    <>
      <HeroSection />
      <CustomerSection />
      <AboutUsSection />
      <InsurancePlan />
      <StorySection />
      <Footer />
    </>    
  )
};

export default GridSection;

export const Head = () => <title>Home</title>