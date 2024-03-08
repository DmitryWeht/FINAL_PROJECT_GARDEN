import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsFromCategory.module.css";

const ProductsFromCategory = ({ isLoading }) => {
  const { categoryId } = useParams();
  const { data: categoryData } = useGetCategoryByIdQuery(categoryId);
  const categoryTitle =
    categoryData && categoryData.category ? categoryData.category.title : "";

  return (
    <div>
      <p className={classes.title}>{categoryTitle}</p>
      <div className={classes.products_wrapper}>
        {isLoading
          ? // Проверяем isLoading перед отображением скелетона
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonForProductItem key={index} />
            ))
          : // Проверяем, существует ли categoryData и его свойство data
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
