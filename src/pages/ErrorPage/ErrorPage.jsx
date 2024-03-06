import classes from "../ErrorPage/ErrorPage.module.css";
import zero from "../../media/0Kaktus.svg";
import four from "../../media/fourGreen.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function NotFound() {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? classes.light : classes.dark;
  return (
    <section className={classes.notFoundPage}>
      <div className={classes.errorWrapper}>
        <img className={classes.four} src={four} alt="4" />
        <img className={classes.zero} src={zero} alt="0" />
        <img className={classes.four} src={four} alt="4" />
      </div>
      <div className={`${classes.messageWrapper} ${themeClass}`}>
        <h4>Page Not Found</h4>
        <p>
          We’re sorry, the page you requested could not be found. <br /> Please
          go back to the homepage.
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Home
        </button>
      </div>
    </section>
  );
}
export default NotFound;
