import "./Navbar.scss";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="navbar-title-container">
        <img
          src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/Jevelin_logo.png"
          alt="/"
          className="navbar-title-icon"
        />
      </div>
      <div className="navbar-burger-icon-container">
        <RxHamburgerMenu className="burger-icon" />
      </div>
      <div className="navbar-options-container">
        <a href="#Home" className="navbar-menu">Home</a>
        <a href="#Projects" className="navbar-menu">Projects</a>
        <a href="#News" className="navbar-menu">News</a>
        <a href="#Contacts" className="navbar-menu">Contacts</a>
      </div>
    </div>
  );
};

export default Navbar;
