import React from "react";
import { Link, useParams } from "react-router-dom";
import useSkeleton from "../../hooks/useSkeleton";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsFromCategory.module.css";

const ProductsFromCategory = () => {
  // Получение параметра categoryId из URL
  const { categoryId } = useParams();
  // Получение данных о категории по ее идентификатору с помощью хука useGetCategoryByIdQuery
  const categoryData = useGetCategoryByIdQuery(categoryId);
  // Получение названия категории
  const categoryTitle =
    categoryData.data && categoryData.data.category
      ? categoryData.data.category.title
      : "";
  // Отображение скелетона во время загрузки
  const showSkeleton = useSkeleton(2000);
  return (
    <div>
      <p className={classes.title}>{categoryTitle}</p>
      <div className={classes.products_wrapper}>
        {/* Если данные загружаются или показывается скелетон, отображаем заглушки */}
        {categoryData.isLoading || showSkeleton
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonForProductItem />
            ))
          : // Если данные загружены, отображаем каждый продукт
            categoryData.data.data.map((product) => (
              <div key={product.id}>
                <Link to={`/categories/${categoryId}/${product.id}`}>
                  <ProductItem {...product} />
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductsFromCategory;
