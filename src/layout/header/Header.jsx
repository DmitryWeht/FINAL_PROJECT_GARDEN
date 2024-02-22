import { useState } from "react";
import classes from "./Header.module.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={classes.header}>      
      <div className="container">
        <div className={classes.header_row}>         
          <NavMenu />
          <HeaderLogo />

        <div className={`${classes.overlay} ${nav ? classes.activeOverlay : ""}`}
             onClick={() => setNav(false)} />

          <BurgerMenu nav={nav} setNav={setNav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
