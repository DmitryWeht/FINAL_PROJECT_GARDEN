import { Link } from "react-router-dom";

import { CategoriesList } from "../CategoriesList/CategoriesList";
import classes from "./Categories.module.css";

export const Categories = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.title_box}>
          <h3 style={textColor}>Categories</h3>
          <div className={classes.line}></div>
          <Link to="/categories">
            <button>All categories </button>
          </Link>
        </div>
        <CategoriesList />
        <div className={style.hidden_button}>
          <Link to="/categories">
            <button>All categories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
