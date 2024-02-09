import { CategoriesList } from "../CategoriesList/CategoriesList";
import classes from "./Categories.module.css";

export const Categories = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.title_box}>
          <h3>Categories</h3>
          <div className={classes.line}></div>

          <button>All categories </button>
        </div>
        <CategoriesList />
        <div className={classes.hidden_button}>
          <button>All categories</button>
        </div>
      </div>
    </div>
  );
};
