import { NavLink } from "react-router-dom";
import classes from "./NavMenu.module.css";

const NavMenu = ({ nav }) => {

  return (
    <div className={classes.menu}>
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

    </div>
  );
};

export default NavMenu;