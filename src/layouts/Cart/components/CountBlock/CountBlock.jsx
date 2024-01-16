import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCart, increaseCart } from "../../../../redux/cartSlice";
import styles from "./CountBlock.module.css";
import IconButton from "../../../../ui-kit/IconButton";
import { ICONS } from "../../../../images/Icons";

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
      <IconButton
        icon={<ICONS.Remove />}
        onClick={() => handleDecreaseCart(item)}
      />
      <div className={styles.field}>{item.cardQuantity}</div>
      <IconButton
        icon={<ICONS.Add />}
        onClick={() => handleIncreaseCart(item)}
      />
    </div>
  );
};

export default CountBlock;
