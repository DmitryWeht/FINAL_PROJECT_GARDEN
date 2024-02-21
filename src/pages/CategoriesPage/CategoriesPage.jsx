import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import classes from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  return (
    <div>
      <div className="container">
        <ButtonNavigation showOnlyFirstTwoButtons={false} />
        <p className={classes.title}>Categories</p>
        <CategoriesList listLength={5} />
      </div>
    </div>
  );
};
