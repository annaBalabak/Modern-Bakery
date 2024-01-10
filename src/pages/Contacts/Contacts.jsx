import React from "react";
import styles from "./Contacts.module.css";
import { Header } from "../../ui-kit/Header/Header";

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <Header title="Contacts" />
      <div>
        <ul className={styles.information}>
          <li>Call us: 717-469-7400 1976</li>
          <li>Laudermilch Rd., Palmyra, PA 17078</li>
          <li>Located in the Farmstead Farmers Market </li>
          <li>Open 8 a.m. to 6 p.m.</li>
        </ul>
      </div>
    </div>
  );
};
export default Contacts;
