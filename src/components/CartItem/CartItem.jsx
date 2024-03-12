import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeFromCart } from "../../store/cartSlice";
import { Counter } from "../Counter/Counter";
import classes from "./CartItem.module.css";

export const CartItem = (props) => {
  const { id, image, title, price, discont_price, cartQuantity} = props;
  const dispatch = useDispatch();

  // Вычисляем itemTotal 
  const itemTotal = discont_price ? discont_price *
                    cartQuantity : price * cartQuantity;
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className={classes.cart_item}>
      <div className={classes.item_left_box}>
        <NavLink to={`/products/${id}`} className={classes.item_wrapper}>
          <img src={`http://127.0.0.1:3333/${image}`} alt={title} />
        </NavLink>

        <div className={classes.item_right}>
          <div className={classes.item_title}>
            <div className={classes.item_content}>
              <h2 className={classes.title}>{title}</h2>
            </div>
            <IoMdClose
              className={classes.del_btn}
              onClick={() => handleRemove(id)}
            />
          </div>

          <div className={classes.counter}>
            <Counter id={id} />

            <div className={classes.price_container}>
              {discont_price ? (
                <>
                <div className={classes.alle_prices}>
                  <p className={classes.discounted_price}>${discont_price}</p>
                  <p className={classes.price_without_discounted}>${price}</p>
                </div>
                  <p className={classes.item_total}>Total: ${itemTotal}</p>
                </>
              ) : (
                <>
                <p className={classes.discounted_price}>${price}</p>
                <p className={classes.item_total}>Total: ${itemTotal}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};