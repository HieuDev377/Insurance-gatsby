import React from "react";

const data = [
  { id: 1, icon: 'http://tyndall.insure/wp-content/uploads/2022/08/Plan-Icon1.png', title: 'Whole Turnover' },
  { id: 2, icon: 'http://tyndall.insure/wp-content/uploads/2022/08/Plan-Icon2.png', title: 'Single Exposure' },
  { id: 3, icon: 'http://tyndall.insure/wp-content/uploads/2022/08/Plan-Icon3.png', title: 'Top up Insurance' }
];

const activeArrowIcon = "http://tyndall.insure/wp-content/uploads/2022/08/Link-active.png";
const arrowIcon = "http://tyndall.insure/wp-content/uploads/2022/08/Link.png";

const InsurancePlan = () => {
  return (
    <section className="insurance-plan">
      <div className="section-container">
        <h1>
          Insurance plan <span>we provide</span>
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/bottom-img.png" alt="" />
        </h1>
        <div className="main-content">
          {data.map((item) => (
            <div key={item.id} className={`plan-item ${item.id % 2 ? '' : 'active'}`}>
              <div className="plan-item-icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div>
                <img src={item.id % 2 ? arrowIcon : activeArrowIcon} alt="" />
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
