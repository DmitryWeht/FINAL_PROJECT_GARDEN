import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import CustomPagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsList.module.css";
const ProductsList = ({ content, products: propProducts, isLoading }) => {
  // В переменной products храним список продуктов, переданных в пропсах.
  const products = propProducts;

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }
  // В allProducts храним состояние текущего списка продуктов
  const [allProducts, setAllProducts] = useState(products);
  // useEffect вызывается при изменении списка продуктов (products) или контента.
  useEffect(() => {
    const discountedProducts = products.filter(
      (product) => product.discont_price
    );
    if (content === "sale") {
      setAllProducts(discountedProducts);
    } else {
      setAllProducts(products);
    }
  }, [content, products]);

  const { totalPages, currentProducts, setCurrentPage } = usePagination(
    allProducts,
    8
  );
  const handlechange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {isLoading ? (
        <div className={classes.products_list}>
          {Array.from({ length: 4 }, (_, index) => (
            <SkeletonForProductItem key={index} />
          ))}
        </div>
      ) : (
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
              <ProductItem {...product} />
            </Link>
          ))}
        </div>
      )}

      <div className={classes.pagination}>
        <CustomPagination count={totalPages} handlechange={handlechange} />
      </div>
    </div>
  );
};

export default ProductsList;
