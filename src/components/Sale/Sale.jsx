import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import ProductsList from "../ProductsList/ProductsList";
import TitleBar from "../TitleBar/TitleBar";
import classes from "./Sale.module.css";

const Sale = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? classes.light : classes.dark;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No products available</div>;
  return (
    <div className={`${classes.sale_container} ${themeClass} container`}>
      <TitleBar title="Sale" buttonText="All sales" linkTo="/sales" />
      <div>
        <ProductsList content="main" />
      </div>
      <div className={`${classes.hidden_button} ${themeClass}`}>
        <Link to="/sales">
          <button>All sales</button>
        </Link>
      </div>
    </div>
  );
};

export default Sale;
