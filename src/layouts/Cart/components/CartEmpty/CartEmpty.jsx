import React from "react";
import styles from "./CartEmpty.module.css";
import { ICONS } from "../../../../images/Icons";

const CartEmpty = () => {
  return (
    <div className={styles.block}>
      <div className={styles.centered}>
        <ICONS.CartEmpty />
        <p>There are no items in your cart yet...</p>
      </div>
    </div>
  );
};

export default CartEmpty;
