import { Link } from "react-router-dom";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import TitleBar from "../TitleBar/TitleBar";
import classes from "./CategoriesSection.module.css";

export const CategoriesSection = () => {
  return (
    <div>
      <div className="container">
        <TitleBar
          title="Categories"
          buttonText="All categories"
          linkTo="/categories"
        />
        <CategoriesList />
        <div className={classes.hidden_button}>
          <Link to="/categories">
            <button>All categories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
