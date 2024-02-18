import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import Discount from "../../components/Discount/Discount";
import { Form } from "../../components/Form/Form";
import Sale from "../../components/Sale/Sale";

export const MainPage = () => {
  return (
    <div>
      <Discount />
      <CategoriesSection />
      <Form />
      <Sale />
    </div>
  );
};
