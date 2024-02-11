import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  const { image, title, price, discont_price } = product;
  const discountPercentage = Math.round(
    ((price - discont_price) / price) * 100
  );
  return (
    <div>
      {" "}
      <div className={classes.product_item}>
        <img
          className={classes.product_img}
          src={`http://127.0.0.1:3333${image}`}
          alt={title}
        />
        <div className={classes.discount_overlay}>
          <div className={classes.discount_text}>-{discountPercentage}% </div>
        </div>

        <h3>{title}</h3>
        <div className={classes.price_container}>
          <p>${discont_price}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
