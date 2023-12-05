import React from "react";
import styles from "./Cart.module.css";
import Modal from "../Modal";
import closeWhiteBtn from "../../images/close-white.svg";
import trashIcon from "../../images/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const Cart = ({ toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems));
  };

  return (
    <Modal type="cart" onClick={toggleCart}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <p className={styles.titleCart}>Your Order</p>
          <img
            src={closeWhiteBtn}
            alt="close icon"
            className={styles.icon}
            onClick={toggleCart}
          />
        </div>
        <div className={styles.itemsContainer}>
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={trashIcon}
                  alt="trash icon"
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                />
                <img className={styles.image} src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
