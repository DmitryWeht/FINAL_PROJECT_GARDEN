import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import classes from "./AllProductsPage.module.css";
import {Filter} from "../../components/Filter/Filter";
//  import { useSelector } from "react-redux";


const AllProductsPage = () => {
 
 

  return (
    <div>
      <div className="container">
        <div className={classes.button_box}>
          <Link to="/">
            <button>Main page</button>
          </Link>
          <div className={classes.line}></div>
          <button>All products</button>
        </div>
        <p className={classes.title}>All products</p>

         <Filter /> 
        <div>
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
