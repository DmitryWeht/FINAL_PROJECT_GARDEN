import { useState } from "react";
import { PiHeartFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/apiSlice";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import {
  addToLikedProducts,
  deleteFromLikedProducts,
} from "../../store/likedProductsSlice";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./SingleProduct.module.css";
const SingleProduct = ({ handleOpenModal }) => {
  const { id } = useParams(); //Извлекаем параметры маршрута из URL
  const { data: products, isLoading } = useGetProductByIdQuery(id);
  // Хук состояния для определения, добавлен ли продукт в корзину
  const [isProductInCart, setIsProductInCart] = useState(false);
  // const isProductInCart = useSelector((state) =>
  //   state.cart.cartItems.some((item) => item.id === id)
  // );

  // Хук состояния для определения, добавлен ли продукт в список избранных
  const [isLiked, setIsLiked] = useState(false);
  // const isLiked = useSelector((state) =>
  //   state.likedProducts.likedProducts.some((item) => item.id === id)
  // );

  const dispatch = useDispatch();
  const handleClickLikeIcon = (product) => {
    // Извлекаем данные о продукте
    const { id, image, title, price, discont_price } = product;
    if (isLiked) {
      dispatch(deleteFromLikedProducts(id));
    } else {
      dispatch(addToLikedProducts({ id, image, title, price, discont_price }));
    }
    setIsLiked(!isLiked);
  };

  const handleClickToggleCart = (product) => {
    const { id, image, title, price, discont_price } = product;
    if (isProductInCart) {
      dispatch(removeFromCart({ id, image, title, price, discont_price }));
    } else {
      dispatch(addToCart({ id, image, title, price, discont_price }));
    }
    setIsProductInCart(!isProductInCart);
  };
  // Функция для рендеринга карточки продукта
  const renderProduct = (product) => (
    <div key={product.id} className={classes.card_product}>
      <img
        src={`http://127.0.0.1:3333/${product.image}`}
        alt={product.title}
        className={classes.image_card}
        onClick={() => handleOpenModal(product)}
      />
      <div className={classes.card_descriptoin}>
        <div className={classes.title_box}>
          <h2>{product.title}</h2>
          <div
            className={isLiked ? classes.likedIcon : classes.likeIcon}
            onClick={() => handleClickLikeIcon(product)}
          >
            <PiHeartFill />
          </div>
        </div>
        <div className={classes.info_box}>
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
                  ((product.price - product.discont_price) / product.price) *
                    100
                )}
                %
              </p>
            )}
          </div>

          <div className={classes.button_box}>
            <CustomButton
              onClick={() => handleClickToggleCart(product)}
              buttonText={isProductInCart ? "Delete from Cart" : "Add to Cart"}
              buttonClasses={classes.custom_button}
            />
          </div>
          <div className={classes.text_box}>
            <p>Description</p>
            <p>{product.description}</p>
          </div>
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
