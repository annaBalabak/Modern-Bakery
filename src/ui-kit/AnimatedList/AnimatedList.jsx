import React from "react";
import styles from "./AnimatedList.module.css";
import { motion, stagger } from "framer-motion";

const AnimatedList = ({ items }) => {
  const staggerList = stagger(0.5, { start: 0.5 });
  return (
    <div>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <motion.li
            key={i}
            className={styles.listItem}
            initial={{ opacity: 0, x: "-300px" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 2, delay: staggerList(i) },
            }}
            viewport={{ once: true }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
export default AnimatedList;
