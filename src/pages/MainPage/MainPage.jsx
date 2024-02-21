import CartForm from "../../components/CartForm/CartForm";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import { Form } from "../../components/Form/Form";
import Sale from "../../components/Sale/Sale";
import SaleBanner from "../../components/SaleBanner/SaleBanner";

export const MainPage = () => {
  return (
    <div>
      <SaleBanner />
      <CategoriesSection />
      <Form />
      <Sale />
      <CartForm />
    </div>
  );
};
