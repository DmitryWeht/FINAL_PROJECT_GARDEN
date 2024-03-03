import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonDailyDiscount from "../ButtonDailyDiscount/ButtonDailyDiscount";
import classes from "./NavMenu.module.css";

const NavMenu = ({ nav }) => {
  const theme = useSelector((state) => state.theme.theme);
  // Определяем класс для темной темы
  const themeClass = theme === "dark" ? classes.dark : "";
  return (
    <div className={`${classes.nav_wrapper} ${themeClass}`}>
      {" "}
      {/* Применяем класс темы к корневому элементу */}
      <div className={`${classes.menu} ${themeClass}`}>
        {" "}
        {/* Применяем класс темы к меню */}
        <ul
          className={`${classes.nav_list} ${
            nav ? classes.active : ""
          } ${themeClass}`}
        >
          {" "}
          {/* Применяем класс темы к списку */}
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
          <li className={`${classes.button} ${themeClass}`}>
            {" "}
            {/* Применяем класс темы к кнопке */}
            <ButtonDailyDiscount />
          </li>
        </ul>
      </div>
      <div className={`${classes.hidden_button} ${themeClass}`}>
        {" "}
        {/* Применяем класс темы к скрытой кнопке */}
        <ButtonDailyDiscount />
      </div>
    </div>
  );
};

export default NavMenu;
