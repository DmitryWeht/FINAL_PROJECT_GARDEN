import classes from "../ErrorPage/ErrorPage.module.css";
import zero from "../../Media/img0.svg";
import four from "../../Media/img4.svg";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <section className={classes.notFoundPage}>
      <div className={classes.errorWrapper}>
        <img className={classes.four} src={four} alt="4" />
        <img className={classes.zero} src={zero} alt="0" />
        <img className={classes.four} src={four} alt="4" />
      </div>
      <div className={classes.messageWrapper}>
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
