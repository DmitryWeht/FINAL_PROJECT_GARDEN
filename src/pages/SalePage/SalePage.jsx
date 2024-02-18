import { Link } from "react-router-dom";
import { FilterBar} from "../../components/FilterBar/FilterBar";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

import ProductsList from "../../components/ProductsList/ProductsList";
import classes from "./SalePage.module.css";

const SalePage = () => { 

 
  // useEffect(() => {
  //   console.log("minPrice:", minPrice);
  //   console.log("maxPrice:", maxPrice);
  //   console.log("showDiscounted:", showDiscounted);
  //   console.log("sort:", sort);
    
  // }, [minPrice, maxPrice, showDiscounted, sort]); 

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

        <FilterBar />

        <ProductsList />
      </div>
    </div>
  );
};

export default SalePage;
