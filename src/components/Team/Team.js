import "./Team.scss";
import React from "react";

const Team = () => {
  return (
    <div className="Team-container">
      <div className="team-title-container">
        <h1 className="team-heading">Meet the team</h1>
        <p className="team-matter">
          Maecenas eget ultrices libero fsce sed convallis
        </p>
      </div>
      <div className="team-members-container">
        <div className="each-team-member-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/adult-beard-businessman-11389031.jpg"
            alt="/"
            className="team-member-avatar"
          />
          <p className="team-member-name">John Berry</p>
          <p className="team-member-designation">CEO</p>
        </div>
        <div className="each-team-member-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/achievement-adult-business-9374812.jpg"
            alt="/"
            className="team-member-avatar"
          />
          <p className="team-member-name">Jan Bruk</p>
          <p className="team-member-designation">Architect</p>
        </div>
        <div className="each-team-member-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/adult-beautiful-beverage-1251090.jpg"
            alt="/"
            className="team-member-avatar"
          />
          <p className="team-member-name">Miranda Berry</p>
          <p className="team-member-designation">Architect</p>
        </div>
        <div className="each-team-member-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/adult-desk-facial-expression-1181631.jpg"
            alt="/"
            className="team-member-avatar"
          />
          <p className="team-member-name">Elizabeth Wood</p>
          <p className="team-member-designation">Exterior designer</p>
        </div>
        <div className="each-team-member-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/beautiful-woman-brunette-facial-expression-2558680.jpg"
            alt="/"
            className="team-member-avatar"
          />
          <p className="team-member-name">Melanie Jones</p>
          <p className="team-member-designation">Interior designer</p>
        </div>
        <div className="each-team-member-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/adult-blur-city-936043.jpg"
            alt="/"
            className="team-member-avatar"
          />
          <p className="team-member-name">Philip Berg</p>
          <p className="team-member-designation">Marketing specialist
</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
