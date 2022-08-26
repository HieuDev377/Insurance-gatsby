import React from "react";
import HeroSection from "../components/HereSection";
import CustomerSection from "../components/CustomerSection";
import AboutUsSection from "../components/AboutUsSection";
import InsurancePlan from "../components/InsurancePlan";
import GetQuote from "../components/GetQutoe";
import StorySection from "../components/StorySection";
import CTASection from "../components/CTASection";
import MeetTeam from "../components/MeetTeam";
import SatisfiedCustomer from "../components/SatisfiedCustomer";
import FaqSection from "../components/Faq";
import Testimonials from "../components/Testimonials";
import SecondaryCTA from "../components/SecondaryCTA";
import Footer from "../components/Footer";
import "../styles/index.scss";

const GridSection = () => {
  return (
    <>
      <CustomerSection />  
      <Testimonials />
      <MeetTeam />
      <FaqSection />
      <GetQuote />
      <SatisfiedCustomer />      
      <HeroSection />      
      <AboutUsSection />
      <InsurancePlan />      
      <StorySection />
      {/* <CTASection /> */}
      <SecondaryCTA />
      <Footer />
    </>    
  )
};

export default GridSection;

export const Head = () => <title>Home</title>