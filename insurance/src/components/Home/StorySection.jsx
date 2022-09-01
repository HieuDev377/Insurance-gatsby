import React from "react";

const data = [
  { id: 1, img: "http://tyndall.insure/wp-content/uploads/2022/08/Story1.png", category: 'Turnover', description: 'New ideas for whole turnover coverage', link: '' },
  { id: 2, img: 'http://tyndall.insure/wp-content/uploads/2022/08/Story2.png', category: 'Loan', description: 'Ways to finance receivables', link: '' },
  { id: 3, img: 'http://tyndall.insure/wp-content/uploads/2022/08/Story3.png', category: 'Insurance', description: 'How to insure effectively', link: '' },
];

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="section-container">
        <h1>
          Check inside <span>Story</span>
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/bottom-img.png" alt="" />
        </h1>
        <div className="main-content">
          {data.map((item) => (
            <div key={item.id} className="story-item">
              <div className="story-item-icon">
                <img src={item.img} alt="" />
              </div>
              <div className="story-item-content">
                <span className="category">{item.category}</span>
                <p>{item.description}</p>
                <div>
                  <img src="http://tyndall.insure/wp-content/uploads/2022/08/Link-active.png" alt="" />
                </div>
              </div>              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
