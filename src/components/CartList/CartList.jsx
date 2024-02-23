import classes from "./CartList.module.css";
import { CartItem } from "../CartItem/CartItem";
import { useSelector } from "react-redux";

export const CartList = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <div className={classes.cart_list}>
      {cart.cartItems.map((elem) => (
        <CartItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};
