import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { ICONS } from "../../images/Icons";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.information}>
        Copyright © 2024 Shop Bakery.
        <br />
        Designed and developed by Anna Balabak.
      </p>
      <motion.p
        className={styles.quotation}
        animate={{ rotate: [-5, 5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        Phenomenally <br /> Healthy!
      </motion.p>
      <div className={styles.socialmedia}>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ICONS.Youtube />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ICONS.Instagram />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ICONS.Facebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
