import CartForm from "../../components/CartForm/CartForm";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection";
import { DiscountForm } from "../../components/DiscountForm/DiscountForm";
import Sale from "../../components/Sale/Sale";
import SaleBanner from "../../components/SaleBanner/SaleBanner";

export const MainPage = () => {
  return (
    <div>
      <SaleBanner />
      <CategoriesSection />
      <DiscountForm />
      <Sale />
      <CartForm />
    </div>
  );
};
