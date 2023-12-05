import React, { useState } from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [secondButtonVisible, setSecondButtonVisible] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setTimeout(() => {
        setSecondButtonVisible(true);
      }, 500);
    } else {
      setSecondButtonVisible(false);
    }
  };
  return (
    <div className={styles.container}>
      <button className={styles.mainButton} onClick={handleButtonClick}>
        Toggle Buttons
      </button>
      <div
        className={`${styles.buttonContainer} ${isOpen ? styles.slideIn : ""}`}
      >
        <button className={styles.messageButton}>Button 1</button>
        {secondButtonVisible && (
          <button className={styles.phoneButton}>Button 2</button>
        )}
      </div>
    </div>
  );
};
export default Contacts;
