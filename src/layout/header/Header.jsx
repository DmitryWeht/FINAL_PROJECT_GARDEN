import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import { toggleTheme } from "../../store/themeSlice";

const Header = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "dark" ? classes.dark : "";

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={`${classes.header} ${themeClass}`}>
      <div className="container">
        <div className={`${classes.header_row} ${themeClass}`}>
          <HeaderLogo />
          <NavMenu nav={nav} />
          <div
            className={`${classes.overlay} ${nav ? classes.activeOverlay : ""}`}
            onClick={() => setNav(false)}
          />
          <BurgerMenu nav={nav} setNav={setNav} />
          {/* Кнопка переключения темы */}
          <button onClick={toggleThemeHandler} className={classes.themeToggle}>
            {/* Иконка солнца/луны или что-то подобное */}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
