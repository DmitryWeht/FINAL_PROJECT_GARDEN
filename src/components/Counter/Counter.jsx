import { useState } from "react";
import minus from "../../Media/minus.svg";
import plus from "../../Media/plus.svg";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [value, setValue] = useState(1);

  return (
    <div className={styles.counter_box}>
      <div className={styles.minus}>
        <img
          src={minus}
          alt="minus"
          onClick={() => setValue(value > 1 ? value - 1 : 1)}
        />
      </div>
      <div className={styles.counter}>
        <p>{value}</p>
      </div>
      <div className={styles.plus}>
        <img src={plus} alt="plus" onClick={() => setValue(value + 1)} />
      </div>
    </div>
  );
};
