import React from "react";
import Hero from "../components/ContactUs/Hero";
import ContactInformation from "../components/ContactUs/ContactInformation";
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/Global/Footer";
import "../styles/index.scss";

const ContactUs = () => {
  return (
    <>
      <Hero />
      <ContactInformation />
      <ContactForm />
      <Footer />
    </>    
  )
};

export default ContactUs;

export const Head = () => <title>Contact Us</title>