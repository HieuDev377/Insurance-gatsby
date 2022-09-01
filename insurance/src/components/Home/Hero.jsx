import React from "react";

const Hero = () => {
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
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/HeroRightImg.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
