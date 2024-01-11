import React from "react";
import styles from "./AnimatedHeading.module.css";
import { motion } from "framer-motion";

const AnimatedHeading = ({ heading, accentText }) => {
  return (
    <div className={styles.introText}>
      {heading.map((el, i) => (
        <motion.span
          className={styles.heading}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 3, delay: i / 3 },
          }}
          viewport={{ once: true }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      <motion.p
        className={styles.heading}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 3, delay: 2.5 },
        }}
        viewport={{ once: true }}
      >
        <span className={styles.accentText}>{accentText}</span>
      </motion.p>
    </div>
  );
};
export default AnimatedHeading;
