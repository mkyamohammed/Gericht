import React from "react";

import { images, data } from "../../constants";
import { MenuItem, SubHeading } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialmenu flex__center section__padding" id="menu">
      <div className="app__specialmenu-title">
        <SubHeading title="menu that fits your palatte" className="myown" />
        <h1 className="headtext__cormorant">todays special</h1>
      </div>

      <div className="app__specialmenu-menu">
        <div className="app__specialmenu-menu_wine flex__center">
          <p className="app__specialmenu-menu_heading">wine & beer</p>
          <div className="app__specialmenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialmenu-menu_image">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__specialmenu-menu_cocktail flex__center">
          <p className="app__specialmenu-menu_heading">cocktails</p>
          <div className="app__specialmenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button
          type="button"
          className="custom__button"
          style={{ textTransform: "capitalize" }}
        >
          know more
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
