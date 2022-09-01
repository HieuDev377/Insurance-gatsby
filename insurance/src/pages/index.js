import React from "react";
import Hero from "../components/Home/Hero";
import Customer from "../components/Home/Customer";
import CTASection from "../components/Global/CTASection";
import AboutUsSection from "../components/Home/AboutUsSection";
import Footer from "../components/Global/Footer";
import GetQuote from "../components/Global/GetQutoe";
import InsurancePlan from "../components/Home/InsurancePlan";
import StorySection from "../components/Home/StorySection";
import "../styles/index.scss";

const GridSection = () => {
  return (
    <>
      <Hero />
      <Customer />
      <AboutUsSection />
      <InsurancePlan />
      <GetQuote bgBlue={false} />
      <StorySection />
      <CTASection />
      <Footer />
    </>    
  )
};

export default GridSection;

export const Head = () => <title>Home</title>