import React from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../redux/cartSlice";
import trashIcon from "../../../../images/trash.svg";
import CountBlock from "../CountBlock/CountBlock";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems));
  };
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <div>
            <img
              className={styles.trashIcon}
              src={trashIcon}
              alt="trash icon"
              onClick={() => {
                handleRemoveFromCart(item);
              }}
            />
          </div>
          <div className={styles.itemDescription}>
            <img className={styles.image} src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <CountBlock item={item} />
          </div>
          <div>
            <p> $ {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartItem;
