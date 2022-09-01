import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-form">      
      <div className="green-bg">
        <div className="green-bg-content">
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/dot.png" alt="" className="yellow-dots" />
        </div>          
      </div>
      <div className="section-container">
        <div className="text-section">
          <h3>Don’t <span>hesitate</span> to drop a line <span>to us</span></h3>
        </div>
        <div className="form-section">
          <div className="contact-us-form">
            <h3>Contact us</h3>
            <div className="form-group-item">
              <div className="form-group-item-content">
                <label htmlFor="">Your Name</label>
                <input type="text" id="name"/>
              </div>
            </div>
            <div className="form-group-item">
              <div className="form-group-item-content">
                <label htmlFor="">Your Email Address</label>
                <input type="email" id="email"/>
              </div>
            </div>
            <div className="form-group-item">
              <div className="form-group-item-content">
                <label htmlFor="">Your Message</label>
                <textarea name="" id="" cols="30" rows="6"></textarea>
              </div>
            </div>
            <div className="actions">
              <button>Send my message</button>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
