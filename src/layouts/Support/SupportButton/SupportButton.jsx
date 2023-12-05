import React, { useState } from "react";
import styles from  "./SupportButton.module.css";

import supportButton from "../../../images/supportButton.svg";
import closeGreenBtn from "../../../images/close-green.svg";
import messageBtn from "../../../images/message.svg";
import phoneBtn from "../../../images/phone-icon.svg";

const SupportButton = ({
  isPhoneModalOpen,
  isMessageModalOpen,
  togglePhoneButton,
  toggleMessageButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageButtonVisible, setMessageButtonVisible] = useState(false);
  const [phoneButtonVisible, setPhoneButtonVisible] = useState(false);

  const toggleButton = () => {
    if (isOpen) {
      setPhoneButtonVisible(false);
      setTimeout(() => setMessageButtonVisible(true), 2000); 
    } else {
      setMessageButtonVisible(true);
      setTimeout(() => setPhoneButtonVisible(true), 100); 
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.supportButtonContainer}>
      <div
        className={`${styles.additionalButtons} ${
          isOpen ? styles.visible : ""
        }`}
      >
        {messageButtonVisible && (
          <div className={styles.messageButton}>
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
        )}
        {phoneButtonVisible && (
          <div className={styles.phoneButton}>
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
        )}
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