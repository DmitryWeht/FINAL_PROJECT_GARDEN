import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import basketImage from "../../media/basket_light.png";
import logo from "../../media/logo-garten.svg";
import classes from "./Header.module.css";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header_row}>
          <div className={classes.header_logo}>
            <img src={logo} alt="logo" />
          </div>

          <div className={classes.menu}>
            <ul className={`${classes.nav_list} ${nav ? classes.active : ""}`}>
              <li className={classes.nav_list_item}>
                <NavLink to="/">Main Page</NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink to="/categories">Categories</NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink to="/products">All products</NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink to="/sales">All sales</NavLink>
              </li>
            </ul>
          </div>

          <div
            className={`${classes.overlay} ${nav ? classes.activeOverlay : ""}`}
          />

          <div className={classes.toogleAll}>
            <div className={classes.nav_basket}>
              <img src={basketImage} alt="basket" />
            </div>

            <div onClick={() => setNav(!nav)} className={classes.mobile_btn}>
              {nav ? <AiOutlineClose size={45} /> : <AiOutlineMenu size={45} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
