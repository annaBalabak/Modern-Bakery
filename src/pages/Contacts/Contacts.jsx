import React from "react";
import styles from "./Contacts.module.css";
import { Header } from "../../ui-kit/Header/Header";
import AnimatedList from "../../ui-kit/AnimatedList/AnimatedList";
import { motion } from "framer-motion";
import AnimatedHeading from "../../ui-kit/AnimatedHeading/AnimatedHeading";

const Contacts = () => {
  const heading = "We Look Forward To Welcome You To".split(" ");
  const accentText = "SHOP BAKERY!";
  const contactsList = [
    "Call us: 717-469-7400 1976",
    "Laudermilch Rd., Palmyra, PA 17078",
    "Located in the Farmstead Farmers Market",
    "Open Monday to Saturday from 8 a.m. to 6 p.m. ",
  ];
  return (
    <div className={styles.contactsContainer}>
      <Header title="Contacts" />
      <div className={styles.heading}>
        <AnimatedHeading heading={heading} accentText={accentText} />
      </div>
      <div className={styles.contactInfo}>
        <AnimatedList items={contactsList} />
        <div className={styles.mapContainer}>
          <motion.iframe
            className={styles.map}
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Farmstead
            Farmers
            Market&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Shop Bakery Location"
            initial={{ opacity: 0, scale: 0, x: "400px" }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 4 },
            }}
            viewport={{ once: true }}
          ></motion.iframe>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
