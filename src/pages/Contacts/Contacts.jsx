import React from "react";
import styles from "./Contacts.module.css";
import { Header } from "../../ui-kit/Header/Header";

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <Header title="Contacts" />
      <h2 className={styles.heading}>
        We look forward to see you in our{" "}
        <span className={styles.accentText}>SHOP BAKERY!</span>{" "}
      </h2>
      <div className={styles.contactInfo}>
        <ul className={styles.information}>
          <li className={styles.infoItem}>Call us: 717-469-7400 1976</li>
          <li className={styles.infoItem}>
            Laudermilch Rd., Palmyra, PA 17078
          </li>
          <li className={styles.infoItem}>
            Located in the Farmstead Farmers Market
          </li>
          <li className={styles.infoItem}>Open 8 a.m. to 6 p.m.</li>
        </ul>

        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Farmstead Farmers Market&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Shop Bakery Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
