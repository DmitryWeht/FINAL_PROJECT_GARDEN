import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsFromCategory.module.css";

const ProductsFromCategory = ({ isLoading }) => {
  // Получение параметра categoryId из URL
  const { categoryId } = useParams();
  // Получение данных о категории по ее идентификатору с помощью хука useGetCategoryByIdQuery
  const { data: categoryData } = useGetCategoryByIdQuery(categoryId);
  // Получение названия категории
  const categoryTitle =
    categoryData && categoryData.category ? categoryData.category.title : "";

  return (
    <div>
      <p className={classes.title}>{categoryTitle}</p>
      <div className={classes.products_wrapper}>
        {/* Если данные загружаются, отображаем скелетон */}
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonForProductItem key={index} />
            ))
          : // Если данные загружены и categoryData существует, отображаем каждый продукт
            categoryData &&
            categoryData.data &&
            categoryData.data.map((product) => (
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
