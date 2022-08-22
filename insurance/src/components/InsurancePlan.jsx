import React from "react";
import TextBottomImg from "../images/bottom-img.png";
import "../styles/InsurancePlan.scss";

import IconImg1 from "../images/insurance-plan/Icon1.png";
import IconImg2 from "../images/insurance-plan/Icon2.png";
import IconImg3 from "../images/insurance-plan/Icon3.png";

import ActiveArrowIcon from "../images/Link-active.png";
import ArrowIcon from "../images/Link.png";

const data = [
  { id: 1, icon: IconImg1, title: 'Whole Turnover' },
  { id: 2, icon: IconImg2, title: 'Single Exposure' },
  { id: 3, icon: IconImg3, title: 'Top up Insurance' }
];

const InsurancePlan = () => {
  return (
    <section className="insurance-plan">
      <div className="section-container">
        <h1>
          Insurance plan <span>we provide</span>
          <img src={TextBottomImg} alt="" />
        </h1>
        <div className="main-content">
          {data.map((item) => (
            <div key={item.id} className={`plan-item ${item.id % 2 ? '' : 'active'}`}>
              <div className="plan-item-icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div>
                <img src={item.id % 2 ? ArrowIcon : ActiveArrowIcon} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="send-message">
          <p><span>Not sure what you need? </span>Just send us a message for more info</p>
          <button>Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default InsurancePlan;
