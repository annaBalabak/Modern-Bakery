import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.header}>
        <em>About</em>
      </h1>
      <div className={styles.infoSection}>
        <div className={styles.imageContainer}>
          <img
            className={`${styles.imgOne} ${styles.image}`}
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className={`${styles.imgTwo} ${styles.image}`}
            src="https://images.unsplash.com/photo-1607151815172-254f6b0c9b4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className={`${styles.imgThree} ${styles.image}`}
            src="https://images.unsplash.com/photo-1612539466296-4ecf1db303e3?q=80&w=1843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <p className={styles.aboutStory}>
          Through the ages, bread has always been an essential part of our daily
          diet. In a jungle of fast foods, chemical additives and artificial
          flavors, I wanted to offer the supermarket public a natural and tasty
          alternative to cardboard fluff breads available out here. Breads
          contain all the same primary ingredients: Flour, water, yeast and
          salt. Simple you might think… But in reality, authentic bread is an
          intricate balance of those “basic ingredients.” In my twenties, I had
          the chance to learn cooking in France as an apprentice in a few grand
          Parisian establishments. I quickly understood that fine bread was
          required to accompany fine dining. I always wondered how the French
          got to make bread so rich in taste and texture. I spent years trying
          and experimenting with different traditional bread recipes. Believe
          me, failing is easier than succeeding when it comes to the “perfect”
          balance between those “basic ingredients!”
        </p>
      </div>
    </div>
  );
};
export default About;
