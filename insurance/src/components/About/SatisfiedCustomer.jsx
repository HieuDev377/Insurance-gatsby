import React from "react";

const data = [
  {
    id: 1,
    title: 'WHO WE ARE',
    description: 'Things go wrong. You have questions. We understand. So we have people who have the experience in trade credit to'
  },
  {
    id: 2,
    title: 'OUR GOAL',
    description: 'Deliver a solution to meets our client’s needs and quickly'
  }
]

const SatisfiedCustomer = () => {
  return (
    <section className="about-satisfied">
      <div className="section-container">
        <div className="section-title">
          <h1>300K+ <span>Satisfied</span> customer</h1>
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/bottom-img.png" alt="" />
        </div>
        <div className="section-content">
          {data.map((item) => (
            <div className="customer-item" key={item.id}>
              <div className="yellow-quote">
                <img src="http://tyndall.insure/wp-content/uploads/2022/08/quotes.svg" alt="" />                  
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SatisfiedCustomer;
