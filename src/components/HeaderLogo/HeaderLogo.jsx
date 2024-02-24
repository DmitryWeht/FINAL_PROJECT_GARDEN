import { NavLink } from "react-router-dom";
import logo from "../../media/logo-garden.svg";
import classes from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <div className={classes.header_logo}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
};

export default HeaderLogo;