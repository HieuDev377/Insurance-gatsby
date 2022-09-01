import React from "react";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      <div className="green-bg">
        <div className="green-bg-content">
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/dot.png" alt="" className="yellow-dots" />
        </div>          
      </div>
      <div className="section-container">
        <div className="left-section">
          <h1>Tired of <span>no cover </span>or <span>delays?</span></h1>
          <div className="our-aim">
            <div className="yellow-quote">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/quotes.svg" alt="" />
            </div>
            <p>We aim to answer any question within 24 hours</p>
            <p className="ceo"><span>Leo Tyndall, &nbsp; </span>CEO</p>
          </div>
        </div>
        <div className="right-section">
          <h5>About Us</h5>
          <h1><span>Best</span> trade credit insures.</h1>
          <p>Things go wrong. You have questions. We understand. So we have people who have the experience in trade credit to</p>
          <p>Our team have worked in QBE, BCC and other recognised insurers prior to Tyndall</p>
          <button>Get a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
