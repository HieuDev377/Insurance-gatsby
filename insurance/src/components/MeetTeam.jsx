import React from "react";
import "../styles/MeetTeam.scss";

const data = [
  { id: 1, name: 'Leo Tyndall', role: 'Founder', image: 'http://tyndall.insure/wp-content/uploads/2022/08/User1.svg' },
  { id: 2, name: 'Andy Rose', role: 'Head of Sales', image: 'http://tyndall.insure/wp-content/uploads/2022/08/User2.svg' },
  { id: 3, name: 'Geoff Kirkby', role: 'Head of Underwriting', image: 'http://tyndall.insure/wp-content/uploads/2022/08/User3.svg' },
  { id: 4, name: 'Phil Eagleton', role: 'Chief Informartion Officer', image: 'http://tyndall.insure/wp-content/uploads/2022/08/User4.svg' },
]

const MeetTeam = () => {
  return (
    <section className="meet-team">
      <div className="section-container">
        <div className="section-title">
          <h1>Meet our <span>Team</span></h1>
          <img src="http://tyndall.insure/wp-content/uploads/2022/08/bottom-img.png" alt="" />
        </div>
        <div className="section-content team-page">
          {data.map((user) => (
            <div className="user-item" key={user.id}>
              <div className="user-item-content">
                <div className="user-item-content-image">
                  <img src={user.image} alt="" />
                </div>
                <div className="user-item-content-text">
                  <h6>{user.name}</h6>
                  <p>{user.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;