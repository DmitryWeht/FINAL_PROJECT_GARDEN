import { useSelector } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import classes from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "dark" ? classes.dark : "";
  return (
    <div className={`container ${themeClass}`}>
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      <h1 className={`${classes.title} ${themeClass}`}>Categories</h1>
      <CategoriesList listLength={5} />
    </div>
  );
};
