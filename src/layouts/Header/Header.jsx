import React, { useEffect, useMemo, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";
import { Link } from "react-router-dom";
import { useModalEffect } from "../../hooks/useModalEffect";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleCart = () => {
    setIsOpenCart((prev) => !prev);
  };

  useModalEffect({ isOpenCart });

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 70) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItemsInCart = useMemo(() => {
    const quantity = cartItems.reduce(
      (total, item) => total + item.cardQuantity,
      0
    );
    return quantity;
  }, [cartItems]);
  return (
    <div>
      <header className={`${styles.header} ${sticky ? styles.sticky : ""}`}>
        <nav>
          <img className={styles.logo} src={logo} alt=" Shop Bakery logo" />
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/about">
            About
          </Link>
          <Link className={styles.navLink} to="/products">
            Products
          </Link>
          <Link className={styles.navLink} to="/promotions">
            Promotions
          </Link>
          <Link className={styles.navLink} to="/contacts">
            Contacts
          </Link>
          <div className={styles.cartContainer}>
            <img
            className={styles.cart}
            src={cart}
            alt="cart icon"
            onClick={toggleCart}
          />
          {totalItemsInCart !== 0 ? (
            <span className={styles.cartCount}>{totalItemsInCart}</span>
          ) : null}
          </div>
          
        </nav>
      </header>
      {isOpenCart && <Cart toggleCart={toggleCart} />}
    </div>
  );
};
export default Header;