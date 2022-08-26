import React from "react";
import "../styles/Faq.scss";

const FaqSection = () => {
  return (
    <section className="faq-section">
      <div className="section-container">
        <div className="section-title">
          <h1>Get your <span>Answer</span></h1>
        </div>
        <div className="section-content">
          <details className="faq-item">
            <summary>
              <span>How does the free trial work?</span>
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/caret.svg" alt="" />
            </summary>
            <div className="faq-content">
              Something small enough to escape casual notice.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              <span>How do you weigh different criteria in your process?</span>
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/caret.svg" alt="" />
            </summary>
            <div className="faq-content">
              commodo consewuent. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaesecat non proindant, sunt in culpa qui pfficia deserunt bobit anim id est laborum.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              <span>What does sefu look for in an idea?</span>
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/caret.svg" alt="" />
            </summary>
            <div className="faq-content">
              Something small enough to escape casual notice.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              <span>What do you look for in a founding team?</span>
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/caret.svg" alt="" />
            </summary>
            <div className="faq-content">
              Something small enough to escape casual notice.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              <span>Do you recommend Pay as you go or Pre pay?</span>
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/caret.svg" alt="" />
            </summary>
            <div className="faq-content">
              Something small enough to escape casual notice.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              <span>Can I pass the fees on to my customer?</span>
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/caret.svg" alt="" />
            </summary>
            <div className="faq-content">
              Something small enough to escape casual notice.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
