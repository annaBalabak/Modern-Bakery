import React from "react";
import styles from "./Footer.module.css";
import youtube from "../../images/youtube.svg";
import instagramIcon from "../../images/instagram.svg";
import facebookIcon from "../../images/facebook.svg";
import { motion } from "framer-motion";

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
        Phenomenally <br /> Healthy!{" "}
      </motion.p>
      <div className={styles.socialmedia}>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="youtube icon" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="instagram icon" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="facebook icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
