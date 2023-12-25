import React from "react";
import styles from "./BurgerMenu.module.css";
import burgerIcon from "../../../../images/burger-icon.svg";
import cart from "../../../../images/cart-white.svg";
const ClosedMenu = ({ toggleMenu, toggleCart, cartQuantity }) => {
  return (
    <div className={styles.closedMenu}>
      <div className={styles.closedHeader}>
        <img
          className={styles.burgerIcon}
          src={burgerIcon}
          alt="burger menu icon"
          onClick={toggleMenu}
        />
        <div>
             <img
          className={styles.cart}
          src={cart}
          alt="cart icon"
          onClick={toggleCart}
        />
         {cartQuantity !== 0 ? (
        <div className={styles.cartQuantity}>{cartQuantity}</div>
      ) : null}</div>
     
      </div>
     
    </div>
  );
};

export default ClosedMenu;
