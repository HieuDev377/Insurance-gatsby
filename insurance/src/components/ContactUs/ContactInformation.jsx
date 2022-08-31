import React from "react";

const ContactInformation = () => {
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
  )
}

export default ContactInformation;
