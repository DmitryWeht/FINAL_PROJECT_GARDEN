import { useSelector } from "react-redux";
import { UserDataForm } from "../UserDataForm/UserDataForm";
import classes from "./CartForm.module.css";

const CartForm = ({handleOpenModalClick}) => {
  const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

  return (
    <div className={classes.form_conteiner}>
      <div className={classes.text_box}>
        <h2>Order details</h2>
        <p>{totalQuantity} items</p>
        <div className={classes.total_box}>
          <p>Total</p>
          <p className={classes.total_sum}>${totalAmount}</p>
        </div>
      </div>

      <UserDataForm
        handleSubmitClick={handleOpenModalClick}
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
