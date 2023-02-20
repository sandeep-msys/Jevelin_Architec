import "./Services.scss";
import React from "react";
import { TfiRulerPencil } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
const Services = () => {
  return (
    <div className="Services-container">
      <div className="service-matter-container">
        <h1 className="service-heading">Our main services</h1>
        <p className="service-matter">
          Nullam mattis sed justo quis sollicitudin. Maecenas lobortis fermentum
          fringilla. Vivamus in diam erat.
        </p>
      </div>

      <div className="service-types-container">
        <div className="each-service-type-container">
          <TfiRulerPencil className="service-type-icon" />
          <h1 className="each-service-heading">Architecture</h1>
          <p className="each-service-matter">
            Lorem ipsum dolor sit amet, consect tuiscing elit. Mauris vitae
            undas sodales lectus, non ultrices nisi.
          </p>
          <p className="each-service-more">Learn more</p>
        </div>

        <div className="each-service-type-container">
          <AiOutlineHome className="service-type-icon" />

          <h1 className="each-service-heading">Interior design</h1>
          <p className="each-service-matter">
            Lorem ipsum dolor sit amet, consect tuiscing elit. Mauris vitae
            undas sodales lectus, non ultrices nisi.
          </p>
          <p className="each-service-more">Learn more</p>
        </div>

        <div className="each-service-type-container">
          <VscGraphLine className="service-type-icon" />

          <h1 className="each-service-heading">Exterior design</h1>
          <p className="each-service-matter">
            Lorem ipsum dolor sit amet, consect tuiscing elit. Mauris vitae
            undas sodales lectus, non ultrices nisi.
          </p>
          <p className="each-service-more">Learn more</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
