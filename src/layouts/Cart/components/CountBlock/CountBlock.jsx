import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCart,
  increaseCart,
} from "../../../../redux/cartSlice";
import styles from "./CoundBlock.module.css";
import dash from "../../../../images/dash-icon.svg";
import add from "../../../../images/add-icon.svg";

const CountBlock = ({ item }) => {
  const dispatch = useDispatch();
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };

  return (
    <div className={styles.countBlock}>
      <img
        src={dash}
        alt="minus icon"
        onClick={() => handleDecreaseCart(item)}
      />
      <div className={styles.field}>{item.cardQuantity}</div>
      <img
        src={add}
        alt="plus icon"
        className={styles.icon}
        onClick={() => handleIncreaseCart(item)}
      />
    </div>
  );
};

export default CountBlock;
