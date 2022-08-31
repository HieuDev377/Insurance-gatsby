import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import MeetTeam from "../components/MeetTeam";
import Footer from "../components/Global/Footer";
import "../styles/index.scss";

const OurTeam = () => {
  return (
    <>
      <SecondaryHero />
      <MeetTeam />
      <Footer />
    </>    
  )
};

export default OurTeam;

export const Head = () => <title>About Us</title>