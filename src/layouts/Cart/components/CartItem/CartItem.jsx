import React from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../redux/cartSlice";
import CountBlock from "../CountBlock/CountBlock";
import IconButton from "../../../../ui-kit/IconButton";
import { ICONS } from "../../../../images/Icons";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems));
  };
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <div className={styles.topRow}>
            <div>
              <IconButton
                icon={<ICONS.Trash />}
                onClick={() => {
                  handleRemoveFromCart(item);
                }}
              />
            </div>
            <div className={styles.itemDescription}>
              <img className={styles.image} src={item.image} alt="product" />
              <p>{item.name}</p>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <div>
              <CountBlock item={item} />
            </div>
            <div>
              <p> $ {item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartItem;
