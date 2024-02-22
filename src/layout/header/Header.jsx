import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import basketImage from "../../media/basket_light.png";
import likeIcon from "../../media/like-icon.svg";
import logo from "../../media/logo-garden.svg";
import classes from "./Header.module.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header_row}>
          <div className={classes.header_logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
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
                  }
                >
                  Categories
                </NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.link} ${classes.active_link}`
                      : `${classes.link}  : ""}`
                  }
                >
                  All products
                </NavLink>
              </li>
              <li className={classes.nav_list_item}>
                <NavLink
                  to="/sales"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.link} ${classes.active_link}`
                      : `${classes.link}  : ""}`
                  }
                >
                  All sales
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            className={`${classes.overlay} ${nav ? classes.activeOverlay : ""}`}
          />

          <div className={classes.toogleAll}>
            <div className={classes.nav_basket}>
              <NavLink to="/liked">
                <img src={likeIcon} alt="basket" />
              </NavLink>
              <NavLink to="/cart">
                <img src={basketImage} alt="basket" />
              </NavLink>
              {cartTotalQuantity && (
                <span className={classes.bag_quantity}>
                  <span>{cartTotalQuantity}</span>
                </span>
              )}
            </div>

            <div onClick={() => setNav(!nav)} className={classes.mobile_btn}>
              {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
