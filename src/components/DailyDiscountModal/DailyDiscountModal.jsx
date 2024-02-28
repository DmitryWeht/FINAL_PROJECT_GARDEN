import { useEffect } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import closeImage from "../../media/close.svg";
import classes from "./DailyDiscountModal.module.css";
const DailyDiscountModal = ({ isOpen, setIsOpen, product, content }) => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.paddingRight = "";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={classes.modal}>
      <div className={classes.card}>
        <div className={classes.text_box}>
          <h2>50% discount on product of the day!</h2>
          <div onClick={() => setIsOpen(false)} className={classes.close_box}>
            <img src={closeImage} alt="close" />
          </div>
        </div>
        <ProductItem
          {...product}
          productStyles={classes.product_card}
          content="modal"
        />
      </div>
    </div>
  );
};

export default DailyDiscountModal;
