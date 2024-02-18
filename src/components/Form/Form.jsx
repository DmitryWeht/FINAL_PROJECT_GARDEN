import gardenSuppliesImage from "../../media/garden-supplies.svg";
import { GetDiscountForm } from "../GetDiscountForm/GetDiscountForm";
import classes from "./Form.module.css";

export const Form = () => {
  return (
    <div className={classes.form}>
      <div className="container">
        <div className={classes.form_wrapper}>
          <h3>5% off on the first order</h3>
          <div className={classes.formBox}>
            <img
              src={gardenSuppliesImage}
              alt="garden supplies"
              className={classes.hidden}
            />
            <GetDiscountForm />
          </div>
        </div>
      </div>
    </div>
  );
};
