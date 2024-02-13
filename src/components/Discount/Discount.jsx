import { Link } from "react-router-dom";
import classes from "./Discount.module.css";

const Discount = () => {
  return (
    <div className={classes.main}>
      <div className="container">
        <div className={classes.promo_text}>
          <div className={classes.promo_title}>
            Amazing Discounts
            <br />
            on Garden Products!
          </div>

          <div className={classes.promo_btn}>
            <Link to="/sales" className={classes.promo_btn}>
              Check out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
