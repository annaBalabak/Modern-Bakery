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
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, y: "200px" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 4 },
        }}
        viewport={{ once: true }}
      >
        <img
          className={styles.imageOne}
          src="https://images.unsplash.com/photo-1544955752-78051eb9b0b8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <img
          className={styles.imageTwo}
          src="https://images.unsplash.com/photo-1649698892055-7794c176c880?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={styles.imageThree}
          src="https://images.unsplash.com/photo-1566698629409-787a68fc5724?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </motion.div>
      <div className={styles.contactInfo}>
        <AnimatedList items={contactsList} />
        <div className={styles.mapContainer}>
          <motion.iframe
            className={styles.map}
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Farmstead
            Farmers
            Market&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Shop Bakery Location"
            initial={{ opacity: 0, scale: 0, x: "200px" }}
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
