import "./About.scss";
import React from "react";

const About = () => {
  const enableAboutInitialAnimations = () => {
    document.getElementById("InitialImage").style.visibility = "visible";
    document.getElementById("InitialImage").style.animation =
      "aboutSlideUp 1s";
    document.getElementById("InitialMatter").style.visibility = "visible";
    document.getElementById("InitialMatter").style.animation =
      "aboutSlideDown 1s";
  };
  const enableAboutSecondaryAnimations = () => {
    document.getElementById("SecondaryImage").style.visibility = "visible";
    document.getElementById("SecondaryImage").style.animation =
      "aboutSlideUp 1s";
    document.getElementById("SecondaryMatter").style.visibility = "visible";
    document.getElementById("SecondaryMatter").style.animation =
      "aboutSlideDown 1s";
  };
  return (
    <div className="About-container"
    id="Contacts">
      <div
        className="about-initial-container"
        onMouseOver={() => {
          enableAboutInitialAnimations();
        }}
      >
        <div className="address-image-container">
          <img
            id="InitialImage"
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-Pq_b2XMH47c-unsplash.jpg"
            alt="/"
            className="address-image"
          />
        </div>

        <div className="address-matter-container" id="InitialMatter">
          <div className="address-details-container">
            <p className="address-matter">68 High street, London, England</p>
            <h1 className="address-heading">
              23 floor office building in the heart of London city
            </h1>
            <button className="address-button">View Project</button>
          </div>
          <div className="address-architect-container">
            <p className="about-architect">
              “Sed ultrices dignissim orci, vel porta justo placerat quis.
              Vestibulum quis tempor erat ”
            </p>
            <div className="architect-details-container">
              <div className="architect-avatar-container">
                <img
                  src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/Ellipse-43.png"
                  alt="/"
                  className="architect-avatar"
                />
              </div>
              <div className="architect-name-container">
                <p className="architect-name">Kate Wilkinson</p>
                <p className="architect-designation">Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-initial-container secondary"
       onMouseOver={() => {
        enableAboutSecondaryAnimations();
      }}>
        <div className="address-image-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/annie-spratt-p5x4IKEkWSo-unsplash.jpg"
            alt="/"
            className="address-image"
            id='SecondaryImage'
          />
        </div>

        <div className="address-matter-container" id='SecondaryMatter'>
          <div className="address-details-container">
            <p className="address-matter">68 North area 23, Los Angeles, USA</p>
            <h1 className="address-heading">
              Award winning private luxury house
            </h1>
            <button className="address-button">View Project</button>
          </div>
          <div className="address-architect-container">
            <p className="about-architect">
              “Sed ultrices dignissim orci, vel porta justo placerat quis.
              Vestibulum quis tempor erat ”
            </p>
            <div className="architect-details-container">
              <div className="architect-avatar-container">
                <img
                  src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/Ellipse-44.png"
                  alt="/"
                  className="architect-avatar"
                />
              </div>
              <div className="architect-name-container">
                <p className="architect-name">John Doe</p>
                <p className="architect-designation">Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
