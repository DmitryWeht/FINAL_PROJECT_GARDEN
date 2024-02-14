import classes from "./ProductItem.module.css";

const ProductItem = ({ image, title, price, discont_price }) => {
  const discountPercentage =
    discont_price !== null
      ? Math.round(((price - discont_price) / price) * 100)
      : null;
  return (
    <div>
      {" "}
      <div className={classes.product_item}>
        <div className={classes.img_container}>
          <img
            className={classes.product_img}
            src={`http://127.0.0.1:3333/${image}`}
            alt={title}
          />
        </div>
        {discountPercentage !== null && (
          <div className={classes.discount_overlay}>
            <div className={classes.discount_text}>-{discountPercentage}% </div>
          </div>
        )}
        <h3 className={classes.product_title}>{title}</h3>
        <div className={classes.price_container}>
          {discont_price ? (
            <>
              <p className={classes.discounted_price}>${discont_price}</p>
              <p className={classes.price_without_discounted}>${price}</p>
            </>
          ) : (
            <p className={classes.discounted_price}>${price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
