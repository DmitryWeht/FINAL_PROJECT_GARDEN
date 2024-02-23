import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import classes from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      <h1 className={classes.title}>Categories</h1>
      <CategoriesList listLength={5} />
    </div>
  );
};
