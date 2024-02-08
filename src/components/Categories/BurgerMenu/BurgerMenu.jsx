import React from "react";
import { NavLink } from "react-router-dom";
import menuLight from "../../media/menu2.png";
import menuDark from "../../media/munu1.png";
import classes from "./Header.module.css";

const BurgerMenu = ({ isOpen, toggleMenu, theme }) => {
  return (
    <div className={classes.mobile_menu}>
      <button className={classes.header_menu_button} onClick={toggleMenu}>
        {/* <img src } alt="menuIcon" /> */}
      </button>

      {isOpen && (
        <div className={classes.mobile_menu_content}>
          <button className={classes.close_button} onClick={toggleMenu}>
            &times;
          </button>

          <ul className={classes.mobile_nav_list}>
            <li>
              <NavLink to="/" onClick={toggleMenu} exact>
                Main Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" onClick={toggleMenu}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={toggleMenu}>
                All products
              </NavLink>
            </li>
            <li>
              <NavLink to="/sales" onClick={toggleMenu}>
                All sales
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;