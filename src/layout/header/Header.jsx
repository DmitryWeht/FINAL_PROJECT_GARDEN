import { useState } from "react";
import { useSelector } from "react-redux";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import NavMenu from "../../components/NavMenu/NavMenu";
import classes from "./Header.module.css";

const Header = () => {
  // Состояние для управления видимостью меню
  const [nav, setNav] = useState(false);

  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? classes.light : classes.dark;

  return (
    <header className={`${classes.header} ${themeClass}`}>
      <div className="container">
        <div className={classes.header_row}>
          <HeaderLogo />
          <NavMenu nav={nav} />
           {/* Оверлей для закрытия меню при клике вне его области */}
          <div
            className={`${classes.overlay} ${nav ? classes.activeOverlay : ""}`}
            onClick={() => setNav(false)}
          />
          <BurgerMenu nav={nav} setNav={setNav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
