import { useDispatch, useSelector } from "react-redux";
import CirlceDark from "../../media/CirlceDarkMode.svg";
import CirlceLight from "../../media/CirlceLightMode.svg";
import moon from "../../media/moon.svg";
import sun from "../../media/sun.svg";
import { toggleTheme } from "../../store/themeSlice";
import classes from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`${classes.themeToggle} ${
        theme === "dark" ? classes.activeBackground : ""
      }`}
    >
      <div className={classes.themeContainer} onClick={toggleThemeHandler}>
        <img className={classes.Img} src={sun} alt="sun" />
        <button
          className={`${classes.Btn} ${
            theme === "light" ? classes.EnableDarkMode : ""
          }`}
        >
          {theme === "light" ? (
            <img src={CirlceLight} alt="elipseLight" />
          ) : (
            <img src={CirlceDark} alt="elipseDark" />
          )}
        </button>
        <img className={classes.Img} src={moon} alt="moon" />
      </div>
    </div>
  );
};

export default ThemeToggle;
