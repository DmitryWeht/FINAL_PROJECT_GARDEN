import React from "react";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const discountedProducts = products.filter(
    (product) => product.discont_price
  );

  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const limitedProducts = [];
  for (let i = 0; i < 4; i++) {
    const randomProduct = getRandomItem(discountedProducts);
    limitedProducts.push(randomProduct);
  }

  return (
    <div className={classes.products_list}>
      {limitedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
