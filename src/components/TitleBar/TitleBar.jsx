import { Link } from "react-router-dom";
import classes from "./TitleBar.module.css";
import { useSelector } from "react-redux";

const TitleBar = ({ title, buttonText, linkTo }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`${classes.title_box} ${
        theme === "light" ? "" : classes.dark
      }`}
    >
      <h2 className={`${theme === "light" ? "" : classes.dark}`}>{title}</h2>
      <div
        className={`${classes.line} ${theme === "light" ? "" : classes.dark}`}
      ></div>
      <Link
        to={linkTo}
        className={`${theme === "light" ? "" : classes.darkLink}`}
      >
        <button className={`${theme === "light" ? "" : classes.dark}`}>
          {buttonText}
        </button>
      </Link>
      <div
        className={`${classes.hidden_button} ${
          theme === "light" ? "" : classes.dark
        }`}
      >
        <Link
          to={linkTo}
          className={`${theme === "light" ? "" : classes.darkLink}`}
        >
          <button className={`${theme === "light" ? "" : classes.dark}`}>
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TitleBar;
