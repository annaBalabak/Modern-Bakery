import React, { useEffect } from "react";
import styles from "./FormSubmitted.module.css";
import Modal from "../../Modal";
import closeWhiteBtn from '../../../images/close-white.svg'

const FormSubmitted = ({ toggleSubmittedMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleSubmittedMessage();
    }, 8000);

    return () => clearTimeout(timer);
  }, [toggleSubmittedMessage]);
  return (
    <Modal type="formSubmitted" onClick={toggleSubmittedMessage}>
      <div className={styles.header}>
        <div className={styles.headerContent}> Support </div>
        <div className={styles.iconContainer}>
              <img
                src={closeWhiteBtn}
                alt="close icon"
                onClick={toggleSubmittedMessage}
              />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <h2>Your request has been sent.</h2>
        <h3>We will get in touch with you as soon as possible.</h3>
        <h2>Thank you for contacting us!</h2>
      </div>
    </Modal>
  );
};

export default FormSubmitted;
