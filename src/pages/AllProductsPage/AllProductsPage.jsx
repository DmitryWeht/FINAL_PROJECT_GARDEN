import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import classes from "./AllProductsPage.module.css";
import {FilterBar} from "../../components/FilterBar/FilterBar";
// import { UseSelector } from "react-redux";


const AllProductsPage = () => {
  // const products = useSelector((state) => state.products.products);
  
  // const productList = useSelector(store => store.productList.productList)
  // .filter((product) => product.showBySale && product.showByRange)
 

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

        <FilterBar />
        <div>
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
