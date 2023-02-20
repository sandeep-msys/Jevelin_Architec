import React from "react";
import "./Home.scss";
import { Carousel } from "antd";
const Home = () => {
  return (
    <div className="Home-container" id='Home'>
      <Carousel autoplaySpeed={3000} autoplay className="home-carousel-container">
        <img
          src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-G3uNjEPiWtU-unsplash.jpg"
          alt="/"
          className="home-carousel-image"
        />
        <img
          src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-G3uNjEPiWtU-unsplash3.jpg"
          alt="/"
          className="home-carousel-image"
        />
        <img
          src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/joel-filipe-G3uNjEPiWtU-unsplash2.jpg"
          alt="/"
          className="home-carousel-image"
        />
      </Carousel>
      <div className="home-matter-container">
        <h1 className="home-heading">
          Delivering high quality, effective, and inspiring
          <span className="highlight"> architecture</span>
        </h1>
        <p className="home-matter">Donec et augue pharetra, rutrum leo at</p>
        <button className="home-button">Latest Projects</button>
      </div>
    </div>
  );
};

export default Home;
