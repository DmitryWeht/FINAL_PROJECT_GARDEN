import { useSelector } from "react-redux";
import { UserDataForm } from "../UserDataForm/UserDataForm";
import classes from "./CartForm.module.css";

const CartForm = () => {
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  const TotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  return (
    <div className={classes.form_conteiner}>
      <div className={classes.text_box}>
        <h2>Order details</h2>
        <p>{cartTotalQuantity} items</p>
        <div className={classes.total_box}>
          <p>Total</p>
          <p className={classes.total_sum}>${TotalAmount}</p>
        </div>
      </div>
      <UserDataForm
        inputStyles={classes.cartInput}
        formStyles={classes.cartForm}
        buttonStyles={classes.cartButton}
        buttonText="Order"
        successText="Thanks for your order"
        requestType="sendOrder"
      />
    </div>
  );
};

export default CartForm;
