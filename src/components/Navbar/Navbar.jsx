import React from "react";

import { BiMenu } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="gericht" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">about</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="app__navbar-actions">
        <a className="p__opensans" href="#login">
          log in / registration
        </a>
        <div className="line"></div>
        <a className="p__opensans" href="/">
          book table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <BiMenu
          className="menu-icon"
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
            <MdRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">about</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
