import { Link } from "react-router-dom";

import ProductsList from "../../components/ProductsList/ProductsList";
import classes from "./SalePage.module.css";

const SalePage = () => {
  return (
    <div>
      <div className="container">
        <div className={classes.button_box}>
          <Link to="/">
            <button>Main page</button>
          </Link>
          <div className={classes.line}></div>
          <button>All sales</button>
        </div>
        <p className={classes.title}>Discounted items</p>
        <ProductsList content="sale" />
      </div>
    </div>
  );
};

export default SalePage;
