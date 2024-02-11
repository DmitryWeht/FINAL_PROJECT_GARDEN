import handsImage from "../../media/hands.svg";
import { DataForm } from "../DataForm/DataForm";
import classes from "./Form.module.css";

export const Form = () => {
  return (
    <div className={classes.form}>
      <div className="container">
        <div className={classes.form_wrapper}>
          <h3>5% off on the first order</h3>
          <div className={classes.formBox}>
            <img src={handsImage} alt="hands" className={classes.hidden} />
            <DataForm />
          </div>
        </div>
      </div>
    </div>
  );
};
