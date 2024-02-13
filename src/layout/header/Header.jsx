import { useState } from "react";
import classes from "./Header.module.css";
import logo from "../../media/logo-garten.svg";
import basketImage from "../../media/basket_light.png";
import { NavLink } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
                <NavLink
                 to="/"
                 className={({ isActive }) =>
                    isActive
                      ? `${classes.link} ${classes.active_link}`
                      : `${classes.link}  : ""}`
                  }
                >
                  Main Page
                 </NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink 
                  to="/categories"
                  className={({ isActive }) =>
                  isActive
                  ? `${classes.link} ${classes.active_link}`
                  : `${classes.link}  : ""}`
              }>
                Categories</NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                    ? `${classes.link} ${classes.active_link}`
                    : `${classes.link}  : ""}`
                }>
                  All products
                  </NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink 
                to="/sales"
                className={({isActive}) =>
                  isActive
                      ? `${classes.link} ${classes.active_link}`
                      : `${classes.link}  : ""}`
                  }
                >All sales</NavLink>
              </li>
            </ul>
          </div>

          <div className={`${classes.overlay} ${nav ? classes.activeOverlay : ""}`} />

          <div className={classes.toogleAll}>
            <div className={classes.nav_basket}>
              <img src={basketImage} alt="basket" />
            </div>

            <div onClick={() => setNav(!nav)} 
                 className={classes.mobile_btn}>
                  {nav ? <AiOutlineClose size = {45}/> : <AiOutlineMenu size = {45}/>}
             
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

