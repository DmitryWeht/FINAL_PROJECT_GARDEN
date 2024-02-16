import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductsFromCategory.module.css";

const ProductsFromCategory = () => {
  const { id } = useParams();
  const result = useGetCategoryByIdQuery(id);

  if (!result || !result.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={classes.products_wrapper}>
        {result.data.data &&
          result.data.data.map((product) => (
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
