import React from "react";
import Hero from "../components/Coverage/Hero";
import Customer from "../components/Coverage/Customer";
import WhyCoverage from "../components/Coverage/WhyCoverage";
import GetQuote from "../components/Global/GetQutoe";
import Faq from "../components/Global/Faq";
import SecondaryCTA from "../components/Global/SecondaryCTA";
import Footer from "../components/Global/Footer";

const Coverage = () => {
  return (
    <>
      <Hero />
      <Customer />
      <WhyCoverage />
      <GetQuote bgBlue={true} />
      <Faq hasSearch={false} />
      <SecondaryCTA />
      <Footer />
    </>
  );
};

export default Coverage;

export const Head = () => <title>Coverage</title>
