import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import { useGetAllProductsQuery } from "../../store/apiSlice";

import CustomPagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = ({ content, products: propProducts, isLoading }) => {
  // Получение данных о продуктах с помощью хука useGetAllProductsQuery
  const { data: fetchedProducts, isError } = useGetAllProductsQuery();

  const products = propProducts || fetchedProducts; // Используем переданные или полученные данные

  // Если произошла ошибка, отображаем сообщение об ошибке
  if (isError) {
    return <div>Error...</div>;
  }

  // Если продукты не найдены, отображаем сообщение об отсутствии продуктов
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
    } else {
      setAllProducts(products);
    }
  }, [content, products]);

  // Пагинация
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
        {isLoading
          ? Array.from({ length: 4 }, (_, index) => (
              <SkeletonForProductItem key={index} />
            ))
          : currentProducts.map((product) => (
              <Link
                key={product.id}
                to={
                  content === "sale"
                    ? `/sales/${product.id}`
                    : `/products/${product.id}`
                }
                className={classes.card_product}
              >
                {/* Показывать скелетон или товар */}
                {isLoading ? (
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
