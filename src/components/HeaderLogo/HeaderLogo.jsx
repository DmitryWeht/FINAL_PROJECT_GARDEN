import { NavLink } from "react-router-dom";
import logo from "../../media/logo-garden.svg";
import classes from "./HeaderLogo.module.css";
import ThemaToggle from "../../components/ThemaToggle/ThemaToggle";

const HeaderLogo = () => {
  return (
    <div className={classes.header_logo}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ThemaToggle />
    </div>
  );
};

export default HeaderLogo;
