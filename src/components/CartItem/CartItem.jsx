import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { removeFromCart } from "../../store/cartSlice";
import { Counter } from "../Counter/Counter";
import classes from "./CartItem.module.css";
// import { getTotals } from "../../store/cartSlice";
// import { useEffect } from "react";

export const CartItem = (props) => {
  const { id, image, title, price, discont_price } = props;
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

//   useEffect(() => {
//     dispatch(getTotals());
//   }, [cart, dispatch]);

  return (
    <div className={classes.cart_item}>
        <div className={classes.item_left_box}>
        <div>
        <NavLink to={`/products/${id}`} className={classes.item_wrapper}>
          <img src={`http://127.0.0.1:3333/${image}`} alt={title} />
        </NavLink>
      </div>

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
                <p className={classes.discounted_price}>${discont_price}</p>
                <p className={classes.price_without_discounted}>${price}</p>
              </>
            ) : (
              <p className={classes.discounted_price}>${price}</p>
            )}
          </div>
        </div>
      </div>

        </div>
      
    </div>
  );
};
