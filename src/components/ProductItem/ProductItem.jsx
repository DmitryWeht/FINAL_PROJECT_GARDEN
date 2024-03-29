import { PiHandbagSimpleFill, PiHeartFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals, removeFromCart } from "../../store/cartSlice";
import {
  addToLikedProducts,
  deleteFromLikedProducts,
} from "../../store/likedProductsSlice";

import CustomButton from "../CustomButton/CustomButton";
import classes from "./ProductItem.module.css";

const ProductItem = ({
  image,
  title,
  price,
  discont_price,
  id,
  productStyles,
  content,
}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === id);
  const isAddedToCart = useSelector((state) =>
    state.cart.cartItems.some((item) => item.id === id)
  );
  // Проверка, добавлен ли товар в избранное
  const isLiked = useSelector((state) =>
    state.likedProducts.likedProducts.some((item) => item.id === id)
  );
  const dispatch = useDispatch();
  // Вычисление процента скидки
  const discountPercentage =
    discont_price !== null
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  const handleClickAddProduct = () => {
    dispatch(addToCart({ id, image, title, price, discont_price }));
    dispatch(getTotals());
  };

  const handleClickRemoveProduct = () => {
    dispatch(removeFromCart({ id, image, title, price, discont_price }));
  };

  const handleClickLikeIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isLiked) {
      dispatch(deleteFromLikedProducts(id));
    } else {
      dispatch(addToLikedProducts({ id, image, title, price, discont_price }));
    }
  };

  const theme = useSelector((state) => state.theme.theme);

  const themeClass = theme === "dark" ? classes.dark : "";

  return (
    <div>
      <div className={`${classes.product_item} ${productStyles} ${themeClass}`}>
        <div className={`${classes.img_container} ${themeClass}`}>
          <img
            className={`${classes.product_img} ${themeClass}`}
            src={`http://127.0.0.1:3333/${image}`}
            alt={title}
          />
        </div>
        {discountPercentage !== null && (
          <div className={classes.discount_overlay}>
            <div className={classes.discount_text}>-{discountPercentage}% </div>
          </div>
        )}
        {/* Иконка "Добавить в избранное" */}
        <PiHeartFill
          className={isLiked ? classes.likedIcon : classes.likeIcon}
          onClick={handleClickLikeIcon}
        />
        {/* Иконка корзины */}
        <PiHandbagSimpleFill
          className={isInCart ? classes.bag : classes.empty_bag}
          onClick={(event) => {
            if (isAddedToCart) {
              event.preventDefault();
              event.stopPropagation();
              handleClickRemoveProduct();
            } else {
              event.preventDefault();
              event.stopPropagation();
              handleClickAddProduct();
            }
          }}
        />
        <h3 className={`${classes.product_title} ${themeClass}`}>{title}</h3>
        <div className={`${classes.price_container} ${themeClass}`}>
          {discont_price ? (
            <>
              <p className={`${classes.discounted_price} ${themeClass}`}>
                ${discont_price}
              </p>
              <p className={classes.price_without_discounted}>${price}</p>
            </>
          ) : (
            <p className={`${classes.discounted_price} ${themeClass}`}>
              ${price}
            </p>
          )}
        </div>
        {/* Кнопка "Добавить в корзину" или "Удалить из корзины" */}
        {content === "modal" ? (
          ""
        ) : (
          <CustomButton
            onClick={
              isAddedToCart ? handleClickRemoveProduct : handleClickAddProduct
            }
            buttonClasses={classes.custom_button}
            buttonText={isAddedToCart ? "Delete from Cart" : "Add to Cart"}
          />
        )}
      </div>

      {content === "modal" ? (
        <CustomButton
          onClick={
            isAddedToCart ? handleClickRemoveProduct : handleClickAddProduct
          }
          buttonClasses={classes.custom_button_modal}
          buttonText={isAddedToCart ? "Delete from Cart" : "Add to Cart"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductItem;
