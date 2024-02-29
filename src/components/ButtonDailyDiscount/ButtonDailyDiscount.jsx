import { useState } from "react";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import DailyDiscountModal from "../DailyDiscountModal/DailyDiscountModal";
import classes from "./ButtonDailyDiscount.module.css";
const ButtonDailyDiscount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const { data: products } = useGetAllProductsQuery();

  const toggleModal = () => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const productWithDiscount = {
      ...randomProduct,
      discont_price: (randomProduct.price / 2).toFixed(2),
    };
    setProduct(productWithDiscount);
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={toggleModal} className={classes.button_discount}>
        1 day discount!
      </button>

      <DailyDiscountModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        product={product}
      />
    </div>
  );
};

export default ButtonDailyDiscount;
