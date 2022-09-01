import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import SatisfiedCustomer from "../components/About/SatisfiedCustomer";
import Footer from "../components/Global/Footer";
import "../styles/index.scss";

const AboutUs = () => {
  return (
    <>
      <SecondaryHero />
      <SatisfiedCustomer />
      {/* <Footer /> */}
    </>    
  )
};

export default AboutUs;

export const Head = () => <title>About Us</title>