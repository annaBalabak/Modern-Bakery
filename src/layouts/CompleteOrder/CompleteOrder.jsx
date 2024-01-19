import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "./CompleteOrder.module.css";
import Modal from "../Modal";
import Button from "../../ui-kit/Button/Button";
import IconButton from "../../ui-kit/IconButton";
import { ICONS } from "../../images/Icons";
import { useModalEffect } from "../../hooks/useModalEffect";
import FormSubmitted from "../FormSubmitted";
import { clearCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CompleteOrder = ({ toggleOrder, toggleCart }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showFormSubmitted, setShowFormSubmitted] = useState(false);
  const dispatch = useDispatch();

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
        <Modal type="support">
          <div className={styles.headerModal}>
            <div className={styles.headerContent}>DELIVERY</div>
            <div className={styles.iconContainer}>
              <IconButton icon={<ICONS.Close />} onClick={toggleOrder} />
            </div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <p className={styles.enterData}>
                Please, fill out the form to complete the order!
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              <div className="button">
                <Button
                  variant="primary"
                  label="Submit the order"
                  padding="padding-sm"
                  isFullWidth={true}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </Modal>
      )}

      {showFormSubmitted && (
        <FormSubmitted
          label="Delivery"
          gratitude="Thank you for your order!"
          toggleSubmittedMessage={() => {
            setShowFormSubmitted(false);
            toggleOrder();
            toggleCart();
            dispatch(clearCart());
          }}
        />
      )}
    </>
  );
};

export default CompleteOrder;
