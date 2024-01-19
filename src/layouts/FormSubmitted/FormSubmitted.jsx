import React, { useEffect } from "react";
import styles from "./FormSubmitted.module.css";
import Modal from "../Modal";
import IconButton from "../../ui-kit/IconButton";
import { ICONS } from "../../images/Icons";

const FormSubmitted = ({ toggleSubmittedMessage, label, gratitude }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleSubmittedMessage();
    }, 8000);

    return () => clearTimeout(timer);
  }, [toggleSubmittedMessage]);
  return (
    <Modal type="formSubmitted" onClick={toggleSubmittedMessage}>
      <div className={styles.header}>
        <div className={styles.headerContent}> {label} </div>
        <div className={styles.iconContainer}>
          <IconButton icon={<ICONS.Close />} onClick={toggleSubmittedMessage} />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <h2>Your request has been sent.</h2>
        <h3>We will get in touch with you as soon as possible.</h3>
        <h2>{gratitude}</h2>
      </div>
    </Modal>
  );
};

export default FormSubmitted;
