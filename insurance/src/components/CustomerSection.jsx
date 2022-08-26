import React from "react";

import IconImg1 from "../images/grid/Icon1.png";
import IconImg2 from "../images/grid/Icon2.png";
import IconImg3 from "../images/grid/Icon3.png";

import "../styles/Customer.scss";

const data = [
  { id: 1, icon: IconImg1, title: 'User Friendly', description: 'Quick, easy and hassle free' },
  { id: 2, icon: IconImg2, title: '100% Trusted', description: '50 Years+ experienced underwriters' },
  { id: 3, icon: IconImg3, title: 'No delay on claims', description: 'Claims assessed quickly' }
];

const CustomerSection = () => {
  return (
    <section className="grid-section">
      <div className="section-container">        
        <div className="main-content">
          <div className="customer-item">
            <div className="customer-item-icon">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/location.svg" alt="" />
            </div>
            <p>Our Location</p>
            <div className="icon-item">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/pin-location-map.svg" alt="" />
              <span>Danmondi, 7563 King Meadow Suite 896, USA</span>
            </div>
          </div>
          <div className="customer-item active">
            <div className="customer-item-icon">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/sms.svg" alt="" />
            </div>
            <p>Email & Phone</p>
            <a href="" className="icon-item">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/email.svg" alt="" />
              <span>weberrindia@gmail.com</span>
            </a>
            <a href="" className="icon-item">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/phone.svg" alt="" />
              <span>880 1723801729</span>
            </a>
          </div>
          <div className="customer-item">
            <div className="customer-item-icon">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/messages.svg" alt="" />
            </div>
            <p>Get In Touch</p>
            <span>Also find us social media below</span>
            <div className="social-links">
              <a href="">
                <img src="http://tyndall.insure/wp-content/uploads/2022/08/Facebook.svg" alt="" />
              </a>
              <a href="">
                <img src="http://tyndall.insure/wp-content/uploads/2022/08/Instagram.svg" alt="" />
              </a>
              <a href="">
                <img src="http://tyndall.insure/wp-content/uploads/2022/08/Twitter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="grid-section">
    //   <div className="section-container">
    //     <h1>30M indemnified+ <span>satisfied customer</span></h1>
    //     <p className="section-description">Helping you pre times of uncertainty is at the what we do</p>
    //     <div className="main-content">
    //       {data.map((item) => (
    //         <div key={item.id} className={`customer-item ${item.id % 2 ? '' : 'active'}`}>
    //           <div className="customer-item-icon">
    //             <img src={item.icon} alt="" />
    //           </div>
    //           <h3>{item.title}</h3>
    //           <p>{item.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default CustomerSection;
