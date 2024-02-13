import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import ProductsList from "../ProductsList/ProductsList";
import classes from "./Sale.module.css";

const Sale = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No products available</div>;
  return (
    <div className={`${classes.sale_container} container`}>
      <div className={classes.text_container}>
        <h2>Sale</h2>
        <div className={classes.line}></div>
        <Link to="/sales">
          <button>All sales</button>
        </Link>
      </div>
      <div>
        <ProductsList content="main" />
      </div>
    </div>
  );
};

export default Sale;
