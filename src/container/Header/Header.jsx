import React from "react";

import { images } from "../../constants";
import { GiSpoon } from "react-icons/gi";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wraper section__padding" id="home">
    <div className="app__wraper-text">
      <SubHeading title="chase the new flavour" />
      <h1>
        <span>the</span> key to fine dining
      </h1>
      <p>
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus
      </p>
      <button type="button">explore menu</button>
    </div>

    <div className="app__wraper-image">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
