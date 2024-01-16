import React, { useState } from "react";
import styles from "./SupportButton.module.css";
import IconButton from "../../../ui-kit/IconButton/IconButton";
import { ICONS } from "../../../images/Icons";

const SupportButton = ({ togglePhoneButton, toggleMessageButton }) => {
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
          <IconButton
            icon={<ICONS.SupportMessage />}
            isFilled={true}
            onClick={() => {
              toggleMessageButton();
              setIsOpen(false);
            }}
          />
        </div>
        <div className={`${styles.phoneButton} ${isOpen ? "" : styles.hidden}`}>
          <IconButton
            icon={<ICONS.SupportPhone />}
            isFilled={true}
            onClick={() => {
              togglePhoneButton();
              setIsOpen(false);
            }}
          />
        </div>
      </div>
      <div className={styles.mainButton}>
        {isOpen ? (
          <IconButton
            icon={<ICONS.SupportClose />}
            isNotFilled={true}
            onClick={toggleButton}
          />
        ) : (
          <IconButton
            icon={<ICONS.SupportBtn />}
            isBackground={true}
            isFilled={true}
            onClick={toggleButton}
          />
        )}
      </div>
    </div>
  );
};

export default SupportButton;
