import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";

const Header = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? classes.light : classes.dark;

  return (
    <header className={`${classes.header} ${themeClass}`}>
      <div className="container">
        <div className={classes.header_row}>
          <HeaderLogo />
          <NavMenu nav={nav} />
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
