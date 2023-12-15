import React from "react";
import styles from "./Home.module.css";
import Carousel from "../../layouts/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.mainContainer}>
        <h1 className={styles.header}>BAKERY</h1>
        <div className={styles.introText}>
          <h2 className={styles.heading}>
            Phenomenally Healthy! Incridients You can pronounce! Flour, Water,
            Salt & Yeast!
          </h2>
          <p className={styles.paragraph}>
            Modern Bakery specializes in naturally leavened breads using organic
            sources, the whole ingredients and maintaining the highest quality .
            Our products are handmade with intention, integrity, and aesthetic
            sensibility — our hope is that each of our creations is received as
            a gift and creates space for a moment of appreciation.
          </p>
        </div>

        <Carousel />

        <div className={styles.container}>
          <div className={styles.text}>
            <h1 className={styles.suppliers}>Our Suppliers</h1>
            <div className={styles.suppliersSection}>
              <div className={styles.supplierContainer}>
                <h2 className={styles.suppliedProduct}>Flours</h2>
                <ul>
                  <li>
                    Farm & Sparrow Organic heirloom stone-milled wheats and
                    other specialty flours
                  </li>
                  <li>Lindley Mills Organic NC 10th-generation mill</li>
                  <li>Carolina Ground Carolinas-grown organic rye and spelt</li>
                </ul>
              </div>
              <div className={styles.supplierContainer}>
                <h2 className={styles.suppliedProduct}>Produce & Dairy</h2>
                <ul>
                  <li>Mountain Foods Local Produce</li>
                  <li>Farm to Home Milk Local Milk, Cream, and Eggs</li>
                </ul>
              </div>
              <div className={styles.supplierContainer}>
                <h2 className={styles.suppliedProduct}>
                  Coffee, Tea, Herbs, etc.
                </h2>
                <ul>
                  <li>Methodical Coffee from Greenville, SC</li>
                  <li>
                    Tima Tea Asheville-based company working with independent
                    Rwandan tea growers
                  </li>
                  <li>
                    Heilbron Herbs Locally grown and impeccably crafted herbal
                    products and teas
                  </li>
                  <li>
                    Matcha Nude Locally woman-owned, sustainable company
                    sourcing high quality organic Japanese matcha
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
