import React from "react";

const SecondaryHero = () => {
  return (
    <section className="hero-secondary">
      <div className="section-container">
        <div className="text-section">
          <p className="text-section-title">ABOUT US</p>
          <h1>Insurance</h1>
          <div className="text-section-content">
              <p>Things go wrong. Trade Credit seems complicated but its doesn't have to be.</p>
              <p>We’ll answer any query in less than 10 mins.</p>
          </div>
          <div className="text-section-author-name">
              <p><span>− Leo Tyndall,</span> CEO Tyndall</p>
          </div>
        </div>        
      </div>
      <div className="img-section">
        <img src="http://tyndall.insure/wp-content/uploads/2022/08/HeroBg2.svg" alt="pricing-img" />
      </div>
    </section>
  );
};

export default SecondaryHero;
