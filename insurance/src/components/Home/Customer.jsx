import React from "react";

const data = [
  { id: 1, icon: 'http://tyndall.insure/wp-content/uploads/2022/08/Customer-Icon1.png', title: 'User Friendly', description: 'Quick, easy and hassle free' },
  { id: 2, icon: 'http://tyndall.insure/wp-content/uploads/2022/08/Customer-Icon2.png', title: '100% Trusted', description: '50 Years+ experienced underwriters' },
  { id: 3, icon: 'http://tyndall.insure/wp-content/uploads/2022/08/Customer-Icon3.png', title: 'No delay on claims', description: 'Claims assessed quickly' }
];

const Customer = () => {
  return (
    <section className="grid-section">
      <div className="section-container">
        <h1>30M indemnified+ <span>satisfied customer</span></h1>
        <p className="section-description">Helping you pre times of uncertainty is at the what we do</p>
        <div className="main-content">
          {data.map((item) => (
            <div key={item.id} className={`customer-item ${item.id % 2 ? '' : 'active'}`}>
              <div className="customer-item-icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customer;
