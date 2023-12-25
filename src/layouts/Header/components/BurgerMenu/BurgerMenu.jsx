import React, { useCallback, useEffect, useState } from "react";
import styles from "./BurgerMenu.module.css";
import ClosedMenu from "./ClosedMenu";
import OpenMenu from "./OpenMenu";
import { useLocation } from "react-router-dom";

const BurgerMenu = ({ toggleCart, cartQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className={styles.container}>
        {isOpen ? (
          <OpenMenu toggleMenu={toggleMenu} />
        ) : (
          <ClosedMenu toggleMenu={toggleMenu} toggleCart={toggleCart } cartQuantity={cartQuantity}/>
        )}
      </div>
    </>
  );
};

export default BurgerMenu;
