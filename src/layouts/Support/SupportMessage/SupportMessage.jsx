import React, { useState } from "react";
import styles from "./SupportMessage.module.css";
import Modal from "../../Modal/Modal";
import Button from "../../../ui-kit/Button/Button";
import { useModalEffect } from "../../../hooks/useModalEffect";
import FormSubmitted from "../FormSubmitted/FormSubmitted";
import IconButton from "../../../ui-kit/IconButton";
import { ICONS } from "../../../images/Icons";

const SupportMessage = ({ toggleSupportMessage }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showFormSubmitted, setShowFormSubmitted] = useState(false);

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  };

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateEmail(email) && name && message) {
      setShowFormSubmitted(true);
    }
  };
  useModalEffect(showFormSubmitted);

  return (
    <>
      {!showFormSubmitted && (
        <Modal type="support" onClick={toggleSupportMessage}>
          <div className={styles.headerModal}>
            <div className={styles.headerContent}> Support Message</div>
            <div className={styles.iconContainer}>
              <IconButton
                icon={<ICONS.Close />}
                onClick={toggleSupportMessage}
              />
            </div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <p className={styles.enterData}>
                Write your email and your message.
              </p>

              <div className={styles.dataContainer}>
                <label className={styles.labelData} htmlFor="name">
                  Your name <span>*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  className={styles.dataInput}
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value.trim())}
                />
                {submitted && !name && (
                  <p className={styles.errorMessage}>
                    Please, enter your name!
                  </p>
                )}
              </div>

              <div className={styles.dataContainer}>
                <label className={styles.labelData} htmlFor="email">
                  Email <span>*</span>
                </label>

                <input
                  id="email"
                  className={styles.dataInput}
                  type="email"
                  pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                  placeholder="Write your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
                {submitted && !email && (
                  <p className={styles.errorMessage}>
                    Please, enter your email!
                  </p>
                )}
                {submitted && email && !validateEmail(email) && (
                  <p className={styles.errorMessage}>
                    Please, check your email!
                  </p>
                )}
              </div>

              <div className={styles.commentContainer}>
                <label className={styles.labelData} htmlFor="message">
                  Message <span>*</span>
                </label>
                <textarea
                  className={`${styles.dataInput} ${styles.dataTextarea}`}
                  id="message"
                  value={message}
                  onChange={handleTextareaChange}
                ></textarea>
                {submitted && !message && (
                  <p className={styles.errorMessage}>
                    Please, write your message!
                  </p>
                )}
              </div>

              <div className="button">
                <Button
                  variant="primary"
                  label="Send message"
                  padding="padding-sm"
                  isFullWidth={true}
                  type="submit"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </Modal>
      )}
      {showFormSubmitted && (
        <FormSubmitted
          toggleSubmittedMessage={() => {
            setShowFormSubmitted(false);
            toggleSupportMessage();
          }}
        />
      )}
    </>
  );
};

export default SupportMessage;
