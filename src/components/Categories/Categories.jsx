// import { Link } from "react-router-dom";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import classes from "./Categories.module.css";
export const Categories = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.title_box}>
          <h3>Categories</h3>
          <div className={classes.line}></div>
          {/* <Link to=""> */}
          <button>All categories </button>
          {/* </Link> */}
        </div>
        <CategoriesList />
        <div className={classes.hidden_button}>
          <button>All categories</button>
        </div>
      </div>
    </div>
  );
};
