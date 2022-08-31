import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="section-container">
        <div className="footer-group-item large">
          <div className="logo">
            <img src="http://tyndall.insure/wp-content/uploads/2022/08/footer-logo.png" alt="" />
          </div>
          <div className="link-item">
            <a href="">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/email.png" alt="" />
              <span>assitance@tyndall.insurance</span>  
            </a>
          </div>
          <div className="link-item">
            <a href="">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/phone.png" alt="" />
              <span>1300 xxx xxx</span>  
            </a>
          </div>
        </div>
        <div className="footer-group-item small">
          <h6>Links</h6>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-group-item small">
          <h6>Help & Support</h6>
          <ul>
            <li>
              <a href="">GAQ</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-group-item small">
          <h6>Help & Support</h6>
          <div className="office-item">
            <h6>Agency Office :</h6>
            <p>Level 14, 179 Elizabeth Stree Sydney NSW 2000</p>
          </div>
          <div className="office-item">
            <h6>Head Office :</h6>
            <p>Labuan Island</p>
          </div>
        </div>
        <div className="footer-group-item large">
          <div className="form-section">
            <input type="text" placeholder="Input your Email" />
            <div>
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/arrow.png" alt="" />
            </div>
          </div>
          <div className="social-links">
            <a href="">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/email.png" alt="" />
            </a>
            <a href="">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/phone.png" alt="" />
            </a>
            <a href="">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/phone.png" alt="" />
            </a>
            <a href="">
              <img src="http://tyndall.insure/wp-content/uploads/2022/08/phone.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;