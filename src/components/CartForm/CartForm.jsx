import { GetDiscountForm } from "../GetDiscountForm/GetDiscountForm";
import classes from "./CartForm.module.css";
const CartForm = () => {
  return (
    <div className={classes.form_conteiner}>
      <GetDiscountForm
        inputStyles={classes.cartInput}
        formStyles={classes.cartForm}
        buttonStyles={classes.cartButton}
        buttonText="Order"
        successText="Thanks for your order"
      />
    </div>
  );
};

export default CartForm;
