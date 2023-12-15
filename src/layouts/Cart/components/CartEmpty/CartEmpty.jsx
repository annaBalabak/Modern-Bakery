import React from "react";
import styles from "./CartEmpty.module.css";
import cartEmpty from "../../../../images/cart-empty.svg"

const CartEmpty = () => {
  return (
      <div className={styles.block}>
        <div className={styles.centered}>
          <img src={cartEmpty} alt="empty cart" />
          <p>There are no items in your cart yet...</p>
        </div>
      </div>
  );
};

export default CartEmpty;
