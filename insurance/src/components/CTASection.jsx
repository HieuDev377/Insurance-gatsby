import React from "react";
import "../styles/CTA.scss";
import BottomImg from "../images/bottom-img.png";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="main-content">
        <div className="main-title">
          <h1>Ready to insure? It’s just a matter of one click</h1>
          <img src={BottomImg} alt="" />
        </div>
        <p>Try it risk free - we don’t charge cancellation fees.</p>
        <div className="actions">
          <button>Get your Quote</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;