import "./Counter.scss";
import React, { useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const [experience, setExperience] = useState(0);
  const [finishedPrj, setFinishedPrj] = useState(0);
  const [awards, setAwards] = useState(0);
  const [emplyee, setEmployee] = useState(0);
  const enableCounterAnimations = () => {
    setTimeout(() => {
      document.getElementById("experienceCounter").style.visibility = "visible";
      document.getElementById("experienceCounter").style.animation =
        "projectSlideUp 1.4s";
        setExperience(30);
    }, 500);
    setTimeout(() => {
      document.getElementById("projectCounter").style.visibility = "visible";
      document.getElementById("projectCounter").style.animation =
        "projectSlideUp 1.4s";
        setFinishedPrj(600);
    }, 850);
    setTimeout(() => {
      document.getElementById("awardsCounter").style.visibility = "visible";
      document.getElementById("awardsCounter").style.animation =
        "projectSlideUp 1.4s";
        setExperience(30);
    }, 1000);
    setTimeout(() => {
      document.getElementById("employeeCounter").style.visibility = "visible";
      document.getElementById("employeeCounter").style.animation =
        "projectSlideUp 1.4s";
        setExperience(30);
    }, 1250);
  
  };
  return (
    <div
      className="Counter-container"
      onMouseOver={() => {
        enableCounterAnimations();
        
        
        setAwards(120);
        setEmployee(70);
      }}
    >
      <div className="counter-title-container" id="News">
        <h1 className="counter-heading">Some numbers</h1>
        <p className="counter-matter">
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
      </div>

      <div className="counter-working-container">
        <div className="each-counter-container" id="experienceCounter">
          <div className="counter-number">
            <CountUp
              scrollInHeight={50}
              className="counter"
              start={0}
              end={experience}
              duration={3}
              useEasing={true}
              useGrouping={true}
            />
          </div>
          <div className="counter-about">Years of experience</div>
        </div>
        <div className="each-counter-container" id="projectCounter">
          <div className="counter-number">
            <CountUp
              scrollInHeight={50}
              className="counter"
              start={0}
              end={finishedPrj}
              duration={3}
              useEasing={true}
              useGrouping={true}
            />
            <p className="plus-icon">+</p>
          </div>
          <div className="counter-about">Finished projects</div>
        </div>
        <div className="each-counter-container" id="awardsCounter">
          <div className="counter-number">
            <CountUp
              scrollInHeight={50}
              className="counter"
              start={0}
              end={awards}
              duration={3}
              useEasing={true}
              useGrouping={true}
            />
          </div>
          <div className="counter-about">Awards</div>
        </div>
        <div className="each-counter-container" id="employeeCounter">
          <div className="counter-number">
            <CountUp
              scrollInHeight={50}
              className="counter"
              start={0}
              end={emplyee}
              duration={3}
              useEasing={true}
              useGrouping={true}
            />
            <p className="plus-icon">+</p>
          </div>
          <div className="counter-about">Employees</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
