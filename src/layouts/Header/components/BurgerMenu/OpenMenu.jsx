import React from "react";
import styles from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo-white.svg";
import IconButton from "../../../../ui-kit/IconButton";
import { ICONS } from "../../../../images/Icons";

const OpenMenu = ({ toggleMenu }) => {
  return (
    <div className={styles.openMenu}>
      <div className={styles.openHeader}>
        <Link className={styles.logo} to="/">
          <img className={styles.logo} src={logo} alt=" Shop Bakery logo" />
        </Link>

        <div>
          <IconButton icon={<ICONS.Close />} onClick={toggleMenu} />
        </div>
      </div>
      <nav>
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
      </nav>
    </div>
  );
};

export default OpenMenu;
