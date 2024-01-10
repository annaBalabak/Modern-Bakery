import React, { useEffect, useMemo, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import logoScroll from "../../images/windmill.png";
import cart from "../../images/cart.svg";
import { Link, NavLink} from "react-router-dom";
import { useModalEffect } from "../../hooks/useModalEffect";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

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
      <div className={styles.burgerMenu}>
        <BurgerMenu toggleCart={toggleCart} cartQuantity={totalItemsInCart} />
      </div>
      <header className={`${styles.header} ${sticky ? styles.sticky : ""}`}>
        <NavLink className={styles.logo} to="/">
          <img src={sticky ? logoScroll : logo} alt=" Shop Bakery logo" />
        </NavLink>
        <nav className={styles.nav}>
          <div className={styles.navLinkContainer}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
            <Link className={styles.navLink} to="/products">
              Products
            </Link>
            <Link className={styles.navLink} to="/contacts">
              Contacts
            </Link>
          </div>

          <div className={styles.cartContainer}>
            <img
              className={styles.cart}
              src={cart}
              alt="cart icon"
              onClick={toggleCart}
            />
            {totalItemsInCart !== 0 ? (
              <div className={styles.cartCount}>{totalItemsInCart}</div>
            ) : null}
          </div>
        </nav>
      </header>
      {isOpenCart && <Cart toggleCart={toggleCart} />}
    </div>
  );
};
export default Header;
