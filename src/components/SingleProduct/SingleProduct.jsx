import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Counter } from "../../components/Counter/Counter";
import likeIcon from "../../media/like-icon.svg";
import likedIcon from "../../media/liked-icon.svg";
import { useGetProductByIdQuery } from "../../store/apiSlice";
import { addToCart, getTotals } from "../../store/cartSlice";
import {
  addToLikedProducts,
  deleteFromLikedProducts,
  getQuantity,
} from "../../store/likedProductsSlice";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./SingleProduct.module.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: products, isLoading } = useGetProductByIdQuery(id);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLiked = useSelector((state) =>
    state.likedProducts.likedProducts.some((item) => item.id === id)
  );
  const isInCart = cartItems.some((item) => item.id === id);
  const dispatch = useDispatch();

  const handleClickLikeIcon = (product) => {
    const { id, image, title, price, discont_price } = product;
    if (isLiked) {
      dispatch(deleteFromLikedProducts(id));
    } else {
      dispatch(addToLikedProducts({ id, image, title, price, discont_price }));
    }
    dispatch(getQuantity());
  };

  const handleClickAddToCart = (product) => {
    const { id, image, title, price, discont_price } = product;
    dispatch(addToCart({ id, image, title, price, discont_price }));
    dispatch(getTotals());
  };

  const renderProduct = (product) => (
    <div key={product.id} className={classes.card_product}>
      <img
        src={`http://127.0.0.1:3333/${product.image}`}
        alt={product.title}
        className={classes.image_card}
      />
      <div className={classes.card_descriptoin}>
        <div className={classes.title_box}>
          <h2>{product.title}</h2>
          <img
            src={isLiked ? likedIcon : likeIcon}
            alt="like-icon"
            className={classes.likeIcon}
            onClick={() => handleClickLikeIcon(product)}
          />
        </div>
        <div className={classes.prices_box}>
          {product.discont_price === null ? (
            <p className={classes.price}>${product.price}</p>
          ) : (
            <>
              <p className={classes.price}>${product.discont_price}</p>
              <p className={classes.discont_price}>${product.price}</p>
            </>
          )}
          {product.discont_price && (
            <p className={classes.discountPercentage}>
              -
              {Math.round(
                ((product.price - product.discont_price) / product.price) * 100
              )}
              %
            </p>
          )}
        </div>
        <Counter id={product.id} />
        <div className={classes.button_box}>
          <CustomButton
            onClick={() => handleClickAddToCart(product)}
            added={isInCart}
            buttonClasses={classes.custom_button}
          />
        </div>
        <div className={classes.text_box}>
          <p>Description</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No product found!</div>;
  }

  return (
    <div>
      {products.map(renderProduct)}
      <div className={classes.text_box_hidden}>
        <p>Description</p>
        <p>{products.length > 0 ? products[0].description : ""}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
