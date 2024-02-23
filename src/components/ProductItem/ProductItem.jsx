import { useDispatch, useSelector } from "react-redux";
import likeIcon from "../../media/like-in-card.svg";
import likedIcon from "../../media/liked-icon.svg";
import { addToCart, getTotals } from "../../store/cartSlice";
import {
  addToLikedProducts,
  deleteFromLikedProducts,
  getQuantity,
} from "../../store/likedProductsSlice";

import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./ProductItem.module.css";

const ProductItem = ({ image, title, price, discont_price, id }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === id);

  const isLiked = useSelector((state) =>
    state.likedProducts.likedProducts.some((item) => item.id === id)
  );
  const dispatch = useDispatch();

  const discountPercentage =
    discont_price !== null
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  const handleClick = () => {
    dispatch(addToCart({ id, image, title, price, discont_price }));
    dispatch(getTotals());
  };

  const handleClickLikeIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isLiked) {
      dispatch(deleteFromLikedProducts(id));
    } else {
      dispatch(addToLikedProducts({ id, image, title, price, discont_price }));
    }
    dispatch(getQuantity());
  };

  return (
    <div>
      <Link to={`/products/${id}`} className={classes.link}>
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
              <div className={classes.discount_text}>
                -{discountPercentage}%{" "}
              </div>
            </div>
          )}
          <img
            src={isLiked ? likedIcon : likeIcon}
            alt="like-icon"
            className={classes.likeIcon}
            onClick={handleClickLikeIcon}
          />
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
          <CustomButton
            onClick={handleClick}
            added={isInCart}
            buttonClasses={`${classes.custom_button} ${
              isInCart ? classes.added : ""
            }`}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
