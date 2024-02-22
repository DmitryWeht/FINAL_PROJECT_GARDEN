import { useDispatch, useSelector } from "react-redux";
import minus from "../../Media/minus.svg";
import plus from "../../Media/plus.svg";
import { decreaseCart, getTotals, increaseCart } from "../../store/cartSlice";
import styles from "./Counter.module.css";

export const Counter = ({ id }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    const item = state.cart.cartItems.find((item) => item.id === id);
    return item ? item.cartQuantity : 0;
  });
  const increase = () => {
    dispatch(increaseCart({ id }));
    dispatch(getTotals());
  };

  const decrease = () => {
    dispatch(decreaseCart({ id }));
    dispatch(getTotals());
  };

  return (
    <div className={styles.counter_box}>
      <div className={styles.minus}>
        <img src={minus} alt="minus" onClick={decrease} />
      </div>
      <div className={styles.counter}>
        <p>{quantity}</p>
      </div>
      <div className={styles.plus}>
        <img src={plus} alt="plus" onClick={increase} />
      </div>
    </div>
  );
};
