import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import TitleBar from "../TitleBar/TitleBar";
import classes from "./Sale.module.css";

const Sale = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  const limitedDiscountedProducts = products
    .filter((products) => products.discont_price)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "light" ? classes.light : classes.dark;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products) return <div>No products available</div>;
  return (
    <div className={`${classes.sale_container} ${themeClass} container`}>
      <TitleBar title="Sale" buttonText="All sales" linkTo="/sales" />
      <div className={classes.products_list}>
        {limitedDiscountedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/sales/${product.id}`}
            className={classes.card_product}
          >
            <ProductItem {...product} />
          </Link>
        ))}
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
