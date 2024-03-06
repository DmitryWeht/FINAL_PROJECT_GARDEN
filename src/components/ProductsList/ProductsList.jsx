import React from "react";
import { Link } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import CustomPagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = ({ content, products: propProducts }) => {
  // Получение данных о продуктах с помощью хука useGetAllProductsQuery
  const {
    data: fetchedProducts,
    isLoading,
    isError,
  } = useGetAllProductsQuery();

  const products = propProducts || fetchedProducts; // Используем переданные или полученные данные

  // Создание массива скелетонов
  const skeletonArray = Array.from({ length: 4 }, (_, index) => (
    <SkeletonForProductItem key={index} />
  ));

  // Если данные загружаются, отображаем скелетон
  if (isLoading) {
    return <div className={classes.products_list}>{skeletonArray}</div>;
  }

  // Если произошла ошибка, отображаем сообщение об ошибке
  if (isError) {
    return <div>Error...</div>;
  }

  // Если продукты не найдены, отображаем сообщение об отсутствии продуктов
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  // Фильтрация продуктов со скидкой
  const discountedProducts = products.filter(
    (product) => product.discont_price
  );

  // Получение случайных продуктов со скидкой
  const limitedProducts = [];
  while (limitedProducts.length < 4 && discountedProducts.length > 0) {
    // Генерация случайного индекса в массиве discountedProducts
    const randomIndex = Math.floor(Math.random() * discountedProducts.length);
    limitedProducts.push(discountedProducts[randomIndex]); // Добавление продукта с полученным случайным индексом в массив limitedProducts

    discountedProducts.splice(randomIndex, 1); // Удаление выбранного продукта из массива discountedProducts
  }

  // Пагинация
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
        {/* Отображение списка продуктов */}
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
            {/* Показывать скелетон или товар */}
            {isLoading ? (
              <SkeletonForProductItem />
            ) : (
              <ProductItem {...product} />
            )}
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
