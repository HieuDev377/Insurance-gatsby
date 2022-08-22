import React from "react";
import TextBottomImg from "../images/bottom-img.png";
import StoryImage1 from "../images/story/Story1.png";
import StoryImage2 from "../images/story/Story2.png";
import StoryImage3 from "../images/story/Story3.png";

import ActiveArrowIcon from "../images/Link-active.png";

import "../styles/Story.scss";

const data = [
  { id: 1, img: StoryImage1, category: 'Turnover', description: 'New ideas for whole turnover coverage', link: '' },
  { id: 2, img: StoryImage2, category: 'Loan', description: 'Ways to finance receivables', link: '' },
  { id: 3, img: StoryImage3, category: 'Insurance', description: 'How to insure effectively', link: '' },
];

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="section-container">
        <h1>
          Check inside <span>Story</span>
          <img src={TextBottomImg} alt="" />
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
                  <img src={ActiveArrowIcon} alt="" />
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
