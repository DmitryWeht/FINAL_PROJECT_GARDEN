import { UserDataForm } from "../UserDataForm/UserDataForm";
import classes from "./CartForm.module.css";
const CartForm = () => {
  return (
    <div className={classes.form_conteiner}>
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
