import { useDispatch, useSelector } from "react-redux";
import minus from "../../media/minus.svg";
import plus from "../../media/plus.svg";
import { decreaseCart, getTotals, increaseCart } from "../../store/cartSlice";
import styles from "./Counter.module.css";

export const Counter = ({ id }) => {
  const dispatch = useDispatch();
  // Получение текущего значения количества товара из Redux store
  const quantity = useSelector((state) => {
    // Поиск товара в корзине по id
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
      <div className={styles.minus} onClick={decrease}>
        <img src={minus} alt="minus" />
      </div>
      <div className={styles.counter}>
        <p>{quantity}</p>
      </div>
      <div className={styles.plus} onClick={increase}>
        <img src={plus} alt="plus" />
      </div>
    </div>
  );
};
