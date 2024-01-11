import React from "react";
import styles from "./About.module.css";
import Carousel from "../../layouts/Carousel/Carousel";
import { motion } from "framer-motion";
import { Header } from "../../ui-kit/Header/Header";
import AnimatedHeading from "../../ui-kit/AnimatedHeading/AnimatedHeading";

const About = () => {
  const heading = "Simple Ingredients Baked To Produce".split(" ");
  const accentText = "Phenomenal Bread!";
  return (
    <div className={styles.aboutContainer}>
      <Header title="About" />
      <div className={styles.heading}>
        <AnimatedHeading heading={heading} accentText={accentText} />
      </div>

      <Carousel />
      <div className={styles.infoSection}>
        <motion.img
          className={`${styles.imageOne} ${styles.image}`}
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="tree round loafs of bread and three ears of corn on top of them"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 3 },
          }}
        />
        <p className={styles.aboutStory}>
          Through the ages, bread has always been an essential part of our daily
          diet. In a jungle of fast foods, chemical additives and artificial
          flavors, we wanted to offer the supermarket public a natural and tasty
          alternative to cardboard fluff breads available out here. <br />
          Breads contain all the same primary ingredients: Flour, water, yeast
          and salt. <br />
          Simple you might think… But in reality, authentic bread is an
          intricate balance of those “basic ingredients.”
        </p>
        <motion.img
          className={`${styles.imageTwo} ${styles.image}`}
          src="https://images.unsplash.com/photo-1607151815172-254f6b0c9b4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" a person sowing a flour into white bowl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 3 },
          }}
        />
        <p className={styles.aboutStory}>
          Years ago, we had the chance to learn cooking in France as an
          apprentice in a few grand Parisian establishments. We quickly
          understood that fine bread was required to accompany fine dining. We
          always wondered how the French got to make bread so rich in taste and
          texture. We spent years trying and experimenting with different
          traditional bread recipes. Believe us, failing is easier than
          succeeding when it comes to the “perfect” balance between those “basic
          ingredients!”{" "}
        </p>
        <p className={styles.aboutStory}>
          We found that milling the grain ourselves, just prior to adding it to
          the dough, highlighted the flavors of the grains while increasing the
          nutritional value of the whole-grain loaves we liked so much. Having
          many friends and family who enjoyed our breads, we started baking for
          others. And so, Shop Bakery was born...
        </p>
      </div>

      <div className={styles.heroSection}>
        <motion.p
          className={styles.quotation}
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          }}
        >
          “Good bread is the most fundamentally satisfying of all foods; and
          good bread with fresh butter, the greatest of feasts.” ― James Beard
        </motion.p>
        <div className={styles.verticalLine}></div>
        <div className={styles.horizontalLine}>
          <hr />
        </div>
        <motion.p
          className={styles.story}
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          }}
        >
          "Shop Bakery" is a brainchild born out of a desire to eat well and
          provide our family with the best nutrition possible. Our mission is to
          provide our customers with the freshest, most nutritional and most
          flavorful product possible. We love to see your faces fill with
          surprise when you realize that whole grain breads really can taste
          this good!
        </motion.p>
      </div>
    </div>
  );
};
export default About;
