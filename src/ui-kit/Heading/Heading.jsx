import React from "react";
import styles from "./Heading.module.css";
import divider from "../../images/divider.png";

export const Heading = ({ title }) => {
  return (
    <div>
      <h1 className={styles.header}>
        <span className={styles.firstLetter}>{title.charAt(0)}</span>
        {title.slice(1)}
      </h1>
      <img
        className={styles.divider}
        src={divider}
        alt="decorative underline"
      />
    </div>
  );
};
