import React from "react";
import "../styles/Hero1.scss";
import HeroBackgroundImage from "../images/HeroBg1.png";
import HeroRightImg from "../images/HeroRight.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="bg-image"></div>     
      <div className="section-container">
        <div className="text-section">
          <h1>Do <span>Insure & Secure</span> your receivables</h1>
          <p>For a better today & tomorrow for your</p>
          <div className="quote-form">
            <p>Get your quotation</p>
            <div className="quote-form-content">
              <div className="main-content">
                <div className="form-section">
                  <label htmlFor="">Email Address</label>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="divider">
                  NSW
                </div>
              </div>
              <button>Get a Quote</button>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={HeroRightImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
