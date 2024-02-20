import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import { Form } from "../../components/Form/Form";
import Sale from "../../components/Sale/Sale";
import SaleBanner from "../../components/SaleBanner/SaleBanner";
import SingleProductPage from "../SingleProductPage/SingleProductPage";

export const MainPage = () => {
  return (
    <div>
      <SaleBanner />
      <CategoriesSection />
      <Form />
      <Sale />
      <SingleProductPage />
    </div>
  );
};
