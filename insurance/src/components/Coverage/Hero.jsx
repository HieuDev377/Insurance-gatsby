import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="bg-image"></div>     
      <div className="section-container">
        <div className="text-section">
          <h1>Get coverage built to protect your <span>business</span></h1>
          <p>Whether it is whole turnover, top up or single exposure, Tyndall is your one stop shop to obtain trade credit insurance.</p>          
        </div>
        <div className="image-section">
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/HeroRight.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
