import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const discountedProducts = products.filter(
    (product) => product.discont_price
  );

  const limitedProducts = [];
  while (limitedProducts.length < 4 && discountedProducts.length > 0) {
    const randomIndex = Math.floor(Math.random() * discountedProducts.length);
    limitedProducts.push(discountedProducts[randomIndex]);
    discountedProducts.splice(randomIndex, 1);
  }

  return (
    <div className={classes.products_list}>
      {limitedProducts.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          // onClick={() => handleProductClick(product.id)}
          className={classes.link}
        >
          <ProductItem
            product={product}
            // isActive={activeProduct === product.id}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
