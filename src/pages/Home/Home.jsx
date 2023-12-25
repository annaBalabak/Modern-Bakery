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

        <div className={styles.heroSection}>
          <p className={styles.quotation}>
            “Good bread is the most fundamentally satisfying of all foods; and
            good bread with fresh butter, the greatest of feasts.” ― James Beard
          </p>
          <div className={styles.verticalLine}></div>
          <div className={styles.horizontalLine}> <hr /></div>
          <p className={styles.story}>
            "Shop Bakery" is a brainchild born out of a desire to eat well and
            provide our family with the best nutrition possible. We found that
            milling the grain ourselves, just prior to adding it to the dough,
            highlighted the flavors of the grains while increasing the
            nutritional value of the whole-grain loaves we liked so much. Having
            many friends and family who enjoyed our breads, we started baking
            for others. And so, Shop Bakery was born. Our mission is to provide
            our customers with the freshest, most nutritional and most flavorful
            product possible. We love to see your faces fill with surprise when
            you realize that whole grain breads really can taste this good!
          </p>
        </div>

        <div className={styles.concept}>
          <div className={styles.conceptContainer}>
            <img
              className={styles.conceptPhoto}
              src="https://images.unsplash.com/photo-1595263929828-220a718dfe44?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className={styles.conceptHeader}>Why We Do What We Do</h2>
            <p>
              We believe everyone should be able to eat great food that makes
              them feel good. That's why we stone mill our own flours and bake
              everything from scratch. We promise these are among the best whole
              grain artisan baked goods you'll find in the Harrisburg region.
              Stop by the bakery and taste what we do!
            </p>
          </div>
          <div className={styles.conceptContainer}>
            <img
              className={styles.conceptPhoto}
              src="https://images.pexels.com/photos/6294381/pexels-photo-6294381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h2 className={styles.conceptHeader}>What We Do</h2>
            <p>
              What do we do? We bring to you, our customer, a wide variety of
              fresh, whole-grain, artisan breads and pastries created with our
              own stone-milled flours. Our bakery is located in the Farmstead
              Farmer's Market and is the only bakery in the area milling our own
              flours. We also are one of the few places you can taste before you
              buy. So, come taste the tour of Sandi's Breads!
            </p>
          </div>
          <div className={styles.conceptContainer}>
            <img
              className={styles.conceptPhoto}
              src="https://images.unsplash.com/photo-1555951015-6da899b5c2cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className={styles.conceptHeader}>How We Do It</h2>
            <p>
              We mill our flours fresh in our own stone mills. We use the most
              natural ingredients and keep our ingredient lists as short as
              possible. Our bakery is an open book. Literally. You can stop by
              and see everything we are doing - from the stone mills to the
              crafting of our artisan breads.
            </p>
          </div>
        </div>

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
                  Coffee, Tea, Herbs.
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
