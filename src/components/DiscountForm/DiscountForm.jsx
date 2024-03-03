import gardenSuppliesImage from "../../media/garden-supplies.svg";
import { UserDataForm } from "../UserDataForm/UserDataForm";
import classes from "./DiscountForm.module.css";

export const DiscountForm = ({ handleOpenModal }) => {
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
            <UserDataForm handleOpenModal={handleOpenModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
