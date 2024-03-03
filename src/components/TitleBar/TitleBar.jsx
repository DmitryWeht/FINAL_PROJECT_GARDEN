import { Link } from "react-router-dom";
import classes from "./TitleBar.module.css";
import { useSelector } from "react-redux";

const TitleBar = ({ title, buttonText, linkTo }) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? classes.light : classes.dark;

  return (
    <div className={`${classes.title_box} ${themeClass}`}>
      <h2>{title}</h2>
      <div className={classes.line}></div>
      <Link to={linkTo}>
        <button>{buttonText}</button>
      </Link>
      <div className={`${classes.hidden_button} ${themeClass}`}>
        <Link to={linkTo}>
          <button>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default TitleBar;
