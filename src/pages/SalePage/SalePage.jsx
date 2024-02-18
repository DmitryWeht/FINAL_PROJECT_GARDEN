import { Link } from "react-router-dom";
import { Filter} from "../../components/Filter/Filter";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

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

         <Filter /> 

        <ProductsList content="sale"/>
      </div>
    </div>
  );
};

export default SalePage;
