import React from "react";
import "../styles/Testimonial.scss";

const data = [
  { 
    id: 1,
    name: 'Brain',
    description: 'My NPS score on brain.fm is a 10/10. If you need to crank through some work, check it out.'
  },
  { 
    id: 2,
    name: 'Brain',
    description: 'My NPS score on brain.fm is a 10/10. If you need to crank through some work, check it out.'
  },
  { 
    id: 3,
    name: 'Brain',
    description: 'My NPS score on brain.fm is a 10/10. If you need to crank through some work, check it out.'
  },
  { 
    id: 4,
    name: 'Brain',
    description: 'My NPS score on brain.fm is a 10/10. If you need to crank through some work, check it out.'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-container move-left-to-right">
        {data.map((testimonial) => (
          <div className="testimonial-item" key={testimonial.id}>
            <img src="https://www.brain.fm/images/brainfm-review-brian.png" className="testimonial-item-avatar" />
            <div className="testimonial-item-ratings">
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
            </div>
            <div className="testimonial-item-description">{testimonial.description}</div>
            <div className="testimonial-item-owner">{testimonial.name}</div>
          </div>
        ))}
      </div>
      <div className="testimonial-container move-right-to-left">
        {data.map((testimonial) => (
          <div className="testimonial-item" key={testimonial.id}>
            <img src="https://www.brain.fm/images/brainfm-review-brian.png" className="testimonial-item-avatar" />
            <div className="testimonial-item-ratings">
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
              <img src="https://www.brain.fm/images/star.svg" alt="star" />
            </div>
            <div className="testimonial-item-description">{testimonial.description}</div>
            <div className="testimonial-item-owner">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
