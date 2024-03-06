import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import useSkeleton from "../../hooks/useSkeleton";
import { useGetAllProductsQuery } from "../../store/apiSlice";

import CustomPagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = ({ content, products: propProducts }) => {
  const {
    data: fetchedProducts,
    isLoading,
    isError,
  } = useGetAllProductsQuery();

  const showSkeleton = useSkeleton(2000);

  if (isLoading) {
    return <SkeletonForProductItem />;
  }

  if (isError) return <div>Error...</div>;

  const products = propProducts || fetchedProducts;

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    const discountedProducts = products.filter(
      (product) => product.discont_price
    );

    if (content === "main") {
      const limitedProducts = discountedProducts.sort(
        () => Math.random() - 0.5
      );
      setAllProducts(limitedProducts.slice(0, 4));
    } else if (content === "sale") {
      setAllProducts(discountedProducts);
    } else setAllProducts(products);
  }, [products]);

  const { totalPages, currentProducts, setCurrentPage } = usePagination(
    allProducts,
    8
  );
  const handlechange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={classes.products_list}>
        {currentProducts.map((product) => (
          <Link
            key={product.id}
            to={
              content === "sale"
                ? `/sales/${product.id}`
                : `/products/${product.id}`
            }
            className={classes.card_product}
          >
            {showSkeleton ? (
              <SkeletonForProductItem />
            ) : (
              <ProductItem {...product} />
            )}
          </Link>
        ))}
      </div>
      {content === "main" ? (
        ""
      ) : (
        <div className={classes.pagination}>
          <CustomPagination count={totalPages} handlechange={handlechange} />
        </div>
      )}
    </div>
  );
};

export default ProductsList;
