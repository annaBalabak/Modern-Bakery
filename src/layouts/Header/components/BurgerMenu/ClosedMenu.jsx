import React from "react";
import styles from "./BurgerMenu.module.css";
import IconButton from "../../../../ui-kit/IconButton";
import { ICONS } from "../../../../images/Icons";

const ClosedMenu = ({ toggleMenu, toggleCart, cartQuantity }) => {
  return (
    <div className={styles.closedMenu}>
      <div className={styles.closedHeader}>
        <IconButton icon={<ICONS.BurgerIcon />} onClick={toggleMenu} />
        <div>
          <IconButton icon={<ICONS.CartIconWhite />} onClick={toggleCart} />
          {cartQuantity !== 0 ? (
            <div className={styles.cartQuantity}>{cartQuantity}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ClosedMenu;
