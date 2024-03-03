import { Link } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import CustomPagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductsList.module.css";
const ProductsList = ({ content, products: propProducts }) => {
  const {
    data: fetchedProducts,
    isLoading,
    isError,
  } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const products = propProducts || fetchedProducts;

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

  const { totalPages, currentProducts, setCurrentPage } = usePagination(
    products,
    8
  );
  const handlechange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={classes.products_list}>
        {(content === "main"
          ? limitedProducts
          : content === "sale"
          ? [...discountedProducts, ...limitedProducts]
          : currentProducts
        ).map((product) => (
          <Link
            key={product.id}
            to={
              content === "sale"
                ? `/sales/${product.id}`
                : `/products/${product.id}`
            }
            className={classes.card_product}
          >
            <ProductItem {...product} />
          </Link>
        ))}
      </div>
      <div className={classes.pagination}>
        <CustomPagination count={totalPages} handlechange={handlechange} />
      </div>
    </div>
  );
};

export default ProductsList;
