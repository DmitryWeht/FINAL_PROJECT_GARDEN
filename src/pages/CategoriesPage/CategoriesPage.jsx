
import { Link } from "react-router-dom";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import classes from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.button_box}>
          <Link to="/">
            <button>Main page</button>
          </Link>
          <div className={classes.line}></div>
          <button>Categories</button>
        </div>
        <p className={classes.title}>Categories</p>
        <CategoriesList listLength={5} />
      </div>
    </div>
  );
};


