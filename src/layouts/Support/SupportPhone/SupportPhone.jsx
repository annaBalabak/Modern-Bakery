import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "./SupportPhone.module.css";
import Modal from "../../Modal/Modal";
import { useModalEffect } from "../../../hooks/useModalEffect";
import Button from "../../../ui-kit/Button/Button";
import FormSubmitted from "../FormSubmitted/FormSubmitted";
import IconButton from "../../../ui-kit/IconButton";
import { ICONS } from "../../../images/Icons";

const SupportPhone = ({ toggleSupportPhone }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showFormSubmitted, setShowFormSubmitted] = useState(false);

  const validatePhone = (value) => /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validatePhone(phone) && name) {
      setShowFormSubmitted(true);
    }
  };

  useModalEffect(showFormSubmitted);
  return (
    <>
      {!showFormSubmitted && (
        <Modal type="support" onClick={toggleSupportPhone}>
          <div className={styles.headerModal}>
            <div className={styles.headerContent}> Support Call</div>
            <div className={styles.iconContainer}>
              <IconButton icon={<ICONS.Close />} onClick={toggleSupportPhone} />
            </div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <p className={styles.enterData}>
                Please, enter your name and phone number!
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
                <label className={styles.labelData} htmlFor="phone">
                  Phone number <span>*</span>
                </label>

                <InputMask
                  id="phone"
                  className={styles.dataInput}
                  mask="+1 (999) 999-9999"
                  maskChar=""
                  placeholder="+1 (xxx) xxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {submitted && !phone && (
                  <p className={styles.errorMessage}>
                    Please, enter your phone number!
                  </p>
                )}
                {submitted && phone && !validatePhone(phone) && (
                  <p className={styles.errorMessage}>
                    Please, check your phone number!
                  </p>
                )}
              </div>

              <div className={styles.commentContainer}>
                <label className="labelData" htmlFor="message">
                  Your message
                </label>

                <textarea
                  id="message"
                  className={`${styles.dataInput} ${styles.dataTextarea}`}
                ></textarea>
              </div>
              <div className="button">
                <Button
                  variant="primary"
                  label="Call me back"
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
            toggleSupportPhone();
          }}
        />
      )}
    </>
  );
};

export default SupportPhone;
