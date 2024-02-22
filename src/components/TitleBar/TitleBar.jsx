import { Link } from "react-router-dom";
import classes from "./TitleBar.module.css";
const TitleBar = ({ title, buttonText, linkTo }) => {
  return (
    <div className={classes.title_box}>
      <h2>{title}</h2>
      <div className={classes.line}></div>
      <Link to={linkTo}>
        <button>{buttonText}</button>
      </Link>
      <div className={classes.hidden_button}>
        <Link to={linkTo}>
          <button>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default TitleBar;
