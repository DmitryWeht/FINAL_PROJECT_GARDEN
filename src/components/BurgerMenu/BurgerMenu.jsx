import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PiBagThin, PiHeartThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = ({ nav, setNav }) => {
  // Получение данных из Redux-хранилища
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const likeTotalQuantity = useSelector(
    (state) => state.likedProducts.likeTotalQuantity
  );
  const theme = useSelector((state) => state.theme.theme);
  // Проверка наличия товаров в корзине и избранных
  const hasItemsInCart = cartTotalQuantity !== null && cartTotalQuantity !== 0;
  const hasItemsInLiked = likeTotalQuantity !== null && likeTotalQuantity !== 0;

  const themeClass = theme === "light" ? classes.light : classes.dark;

  return (
    <div className={classes.toogleAll}>
      <div className={`${classes.nav_liked} ${themeClass}`}>
        <NavLink to="/liked">
          <PiHeartThin className={`${classes.likeIcon} ${themeClass}`} />
          {/* Отображение количества избранных товаров, если есть */}
          {hasItemsInLiked > 0 && (
            <span className={classes.like_quantity}>
              <span>{likeTotalQuantity}</span>
            </span>
          )}
        </NavLink>
      </div>
      <div className={`${classes.nav_basket} ${themeClass}`}>
        <NavLink to="/cart">
          <PiBagThin />
        </NavLink>
         {/* Отображение количества товаров в корзине, если есть */}
        {hasItemsInCart && (
          <span className={classes.bag_quantity}>
            <span>{cartTotalQuantity}</span>
          </span>
        )}
      </div>
        {/* Кнопка для открытия/закрытия мобильного меню */}
      <div onClick={() => setNav(!nav)} className={classes.mobile_btn}>
        {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
      </div>
    </div>
  );
};

export default BurgerMenu;
