import "./Projects.scss";
import React from "react";

const Projects = () => {
  const enableProjectAnimations = () => {
    document.getElementById("eachProjectImage").style.visibility = "visible";
    document.getElementById("eachProjectImage").style.animation =
      "projectSlideUp 1.4s";
    setTimeout(() => {
      document.getElementById("eachProjectImage2").style.visibility = "visible";
      document.getElementById("eachProjectImage2").style.animation =
        "projectSlideUp 1.4s";
    }, 500);
    setTimeout(() => {
      document.getElementById("eachProjectImage3").style.visibility = "visible";
      document.getElementById("eachProjectImage3").style.animation =
        "projectSlideUp 1.4s";
    }, 850);
    setTimeout(() => {
      document.getElementById("eachProjectImage4").style.visibility = "visible";
      document.getElementById("eachProjectImage4").style.animation =
        "projectSlideUp 1.4s";
    }, 1000);
    setTimeout(() => {
      document.getElementById("eachProjectImage5").style.visibility = "visible";
      document.getElementById("eachProjectImage5").style.animation =
        "projectSlideUp 1.4s";
    }, 1250);
  };
  return (
    <div
      className="Projects-container"
      id="Projects"
      onMouseOver={() => {
        enableProjectAnimations();
      }}
    >
      <div className="project-title-container">
        <h1 className="project-heading">Our latest work</h1>
        <p className="project-matter">
          Donec eleifend fermentum semper. Etiam enim sapien, feugiat id eros a,
          lacinia
        </p>
      </div>
      <div className="project-image-container">
        <div
          className="each-project-image-container"
          style={{
            backgroundImage: `url${"https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-9cU_HC5CND8-unsplash5-420x660.jpg"}`,
          }}
        >
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-9cU_HC5CND8-unsplash5-420x660.jpg"
            alt="/"
            className="each-project-image"
            id="eachProjectImage"
          />
        </div>

        <div className="each-project-image-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-9cU_HC5CND8-unsplash4-420x660.jpg"
            alt="/"
            className="each-project-image"
            id="eachProjectImage2"
          />
        </div>
        <div className="each-project-image-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-9cU_HC5CND8-unsplash3-420x660.jpg"
            alt="/"
            className="each-project-image"
            id="eachProjectImage3"
          />
        </div>
        <div className="each-project-image-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-9cU_HC5CND8-unsplash2-420x660.jpg"
            alt="/"
            className="each-project-image"
            id="eachProjectImage4"
          />
        </div>
        <div className="each-project-image-container">
          <img
            src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-9cU_HC5CND8-unsplash1-420x660.jpg"
            alt="/"
            className="each-project-image"
            id="eachProjectImage5"
          />
        </div>
      </div>
      <div className="project-view-button-container">
        <button className="project-view-button">View All Projects</button>
      </div>
    </div>
  );
};

export default Projects;
