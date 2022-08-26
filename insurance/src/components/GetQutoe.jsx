import React from "react";
import LinkIcon from "../images/yellow-link.svg";
import QuoteBg from "../images/GetQuoteBG.svg";
import "../styles/GetQuote.scss";

const GetQuote = () => {
  return (
    <section className="get-quote bg-blue">
      <div className="section-container">
        <div className="left-section">
          <h1>GET A QUOTE</h1>
          <h3><span>3 million</span> client choose us.</h3>
          <p>Things go wrong. You have questions. <span>We understand.</span> So we have people who have the <span>experience</span> in trade credit to</p>
          <a href="">
            <span>Contact us for more info</span>
            <img src={LinkIcon} alt="" />
          </a>
        </div>
        <div className="right-section">
          <div className="bg-image">
            <img src={QuoteBg} alt="" />
          </div>      
          <div className="quote-section">
            <h3>Get a Quote</h3>
            <div className="form-group-item">
              <div className="form-group-item-content">
                <label htmlFor="product">Product</label>
                <select id="product">
                  <option value="">Whole Turnover</option>
                  <option value="">Test Product1</option>
                  <option value="">Test Product2</option>
                </select>
              </div>
            </div>
            <div className="form-group-item">
              <div className="form-group-item-content">
                <label htmlFor="">Your Email Address</label>
                <input type="email" id="email"/>
              </div>
            </div>
            <div className="actions">
              <button>Start a Quote</button>
            </div>
            <a href="">Been here before? <span>Review your quote</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
