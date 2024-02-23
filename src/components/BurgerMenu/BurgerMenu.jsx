import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import basketImage from "../../media/basket_light.png";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = ({ nav, setNav }) => {
    const cartTotalQuantity = useSelector(
        (state) => state.cart.cartTotalQuantity
      );
      const hasItemsInCart = cartTotalQuantity !== null && cartTotalQuantity !== 0;
      
  return (
    <div className={classes.toogleAll}>
      <div className={classes.nav_basket}>
        <NavLink to="/cart">
          <img src={basketImage} alt="basket" />
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