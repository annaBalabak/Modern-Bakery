import React, { useMemo, useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import CartEmpty from "./components/CartEmpty";
import CartItem from "./components/CartItem/CartItem";
import Button from "../../ui-kit/Button/Button";
import IconButton from "../../ui-kit/IconButton";
import { ICONS } from "../../images/Icons";
import CompleteOrder from "../CompleteOrder/CompleteOrder";

const Cart = ({ toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isOrder, setIsOrder] = useState(false);

  const productTotal = useMemo(() => {
    const total = cartItems.reduce(
      (accumulator, element) =>
        accumulator + element.cardQuantity * element.price,
      0
    );
    return total;
  }, [cartItems]);
  const completeOrder = ()=> {
  setIsOrder((prev) => !prev);
  }
  return (
    <Modal type="cart" onClick={toggleCart}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <p className={styles.titleCart}>Your Order</p>
          <IconButton icon={<ICONS.Close />} onClick={toggleCart} />
        </div>
        <div>
          {cartItems.length > 0 ? (
            <CartItem items={cartItems} />
          ) : (
            <CartEmpty />
          )}
        </div>
        <hr />
        <div className={styles.bottom}>
          <div className={styles.total}>
            Total:
            <b>
              <span className={styles.currency}> $ </span>
              {productTotal.toFixed(2)}
            </b>
          </div>
          <Button
            label="Complete the order"
            variant={cartItems.length > 0 ? "primary" : "disabled"}
            padding="padding-even"
            onClick={completeOrder}
            disabled={cartItems.length === 0}
          />
          {isOrder && (
            <CompleteOrder toggleOrder = {completeOrder} toggleCart ={toggleCart}/>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
