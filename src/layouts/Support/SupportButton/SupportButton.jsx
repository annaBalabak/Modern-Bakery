import React, { useState } from "react";
import styles from  "./SupportButton.module.css";

import supportButton from "../../../images/supportButton.svg";
import closeGreenBtn from "../../../images/close-brown.svg";
import messageBtn from "../../../images/message.svg";
import phoneBtn from "../../../images/phone-icon.svg";

const SupportButton = ({
  togglePhoneButton,
  toggleMessageButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.supportButtonContainer}>
      <div
        className={`${styles.additionalButtons} ${
          isOpen ? styles.visible : ""
        }`}
      >
        <div
          className={`${styles.messageButton} ${isOpen ? "" : styles.hidden}`}
        >
          <img
            className={styles.iconFill}
            src={messageBtn}
            alt=""
            onClick={() => {
              toggleMessageButton();
              setIsOpen(false);
            }}
          />
        </div>
        <div className={`${styles.phoneButton} ${isOpen ? "" : styles.hidden}`}>
          <img
            className={styles.iconFill}
            src={phoneBtn}
            alt=""
            onClick={() => {
              togglePhoneButton();
              setIsOpen(false);
            }}
          />
        </div>
      </div>
      <div className={styles.mainButton}>
        {isOpen ? (
          <img
            className={styles.iconNoFill}
            src={closeGreenBtn}
            alt=""
            onClick={toggleButton}
          />
        ) : (
          <img
            className={styles.iconFill}
            src={supportButton}
            alt=""
            onClick={toggleButton}
          />
        )}
      </div>
    </div>
  );
};

export default SupportButton;