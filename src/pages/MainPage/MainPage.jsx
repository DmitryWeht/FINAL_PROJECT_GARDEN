import { useDispatch, useSelector } from "react-redux";
import classes from "../MainPage/MainPage.module.css";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import { DiscountForm } from "../../components/DiscountForm/DiscountForm";
import Sale from "../../components/Sale/Sale";
import SaleBanner from "../../components/SaleBanner/SaleBanner";

export const MainPage = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`${classes.mainPage} ${
        theme === "light" ? classes.light : classes.dark
      }`}
    >
      <SaleBanner />
      <CategoriesSection />
      <DiscountForm />
      <Sale />
    </div>
  );
};
