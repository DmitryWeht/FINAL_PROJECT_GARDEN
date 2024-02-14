import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetCategoryByIdQuery,
} from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductsFromCategory.module.css";

const ProductsFromCategory = () => {
  const { id } = useParams();
  const {
    data: category,
    error: categoryError,
    isLoading: categoryLoading,
  } = useGetCategoryByIdQuery(id);
  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useGetAllProductsQuery();

  if (categoryLoading || productsLoading) return <div>Loading...</div>;
  if (categoryError || productsError)
    return <div>Error: {categoryError || productsError}</div>;

  return (
    <div>
      <div className={classes.products_wrapper}>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductItem {...product} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsFromCategory;
