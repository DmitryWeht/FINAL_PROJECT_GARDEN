import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PiBagThin, PiHeartThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = ({ nav, setNav }) => {
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const likeTotalQuantity = useSelector(
    (state) => state.likedProducts.likeTotalQuantity
  );

  const hasItemsInCart = cartTotalQuantity !== null && cartTotalQuantity !== 0;
  const hasItemsInLiked = likeTotalQuantity !== null && likeTotalQuantity !== 0;

  return (
    <div className={classes.toogleAll}>
      <div className={classes.nav_liked}>
        <NavLink to="/liked">
          <PiHeartThin className={classes.likeIcon} />
          {hasItemsInLiked > 0 && (
            <span className={classes.like_quantity}>
              <span>{likeTotalQuantity}</span>
            </span>
          )}
        </NavLink>
      </div>
      <div className={classes.nav_basket}>
        <NavLink to="/cart">
          <PiBagThin />
          {/* <img src={basketImage} alt="basket" /> */}
        </NavLink>
        {hasItemsInCart && (
          <span className={classes.bag_quantity}>
            <span>{cartTotalQuantity}</span>
          </span>
        )}
      </div>

      <div onClick={() => setNav(!nav)} className={classes.mobile_btn}>
        {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
      </div>
    </div>
  );
};

export default BurgerMenu;
