import React from "react";
import styles from "./Home.module.css";
import { motion, stagger } from "framer-motion";
import stamp from "../../images/healthyStamp.png";
import AnimatedList from "../../ui-kit/AnimatedList";
import AnimatedHeading from "../../ui-kit/AnimatedHeading";

const Home = () => {
  const heading = "Phenomenally Healthy! Incridients You Can Pronounce!".split(
    " "
  );
  const accentText = "Flour, Water,Salt & Yeast!";
  const bakery = ["B", "A", "K", "E", "R", "Y"];
  const benefitsList = [
    "No Chemicals, Additives, or Preservatives!",
    "No Bleached or Bromated Flour!",
    "No Pesticides or Herbicides Used on the Wheat!",
    "No Artificial or GMO!",
  ];
  const staggerList = stagger(0.5, { start: 0.5 });
  return (
    <div>
      <div className={styles.backgroundContainer}>
        <div className={styles.background}></div>
      </div>
      <div className={styles.mainContainer}>
        <h1 className={styles.header}>
          {bakery.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: staggerList(i) },
              }}
              viewport={{ once: true }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <div className={styles.introText}>
          <div className={styles.heading}>
            <AnimatedHeading heading={heading} accentText={accentText} />
          </div>

          <p className={styles.paragraph}>
            Shop Bakery specializes in naturally leavened breads using organic
            sources, the whole ingredients and maintaining the highest quality .
            Our products are handmade with intention, integrity, and aesthetic
            sensibility — our hope is that each of our creations is received as
            a gift and creates space for a moment of appreciation.
          </p>
        </div>

        <div className={styles.benefits}>
          <AnimatedList items={benefitsList} />
          <motion.img
            src={stamp}
            alt="round stamp with the text Phenomenally Healthy in the middle and ALL Natural NON GMO on the sides "
            className={styles.stamp}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 4 },
              rotate: [-500, 0],
            }}
            viewport={{ once: true }}
          />
        </div>

        <motion.div
          className={styles.concept}
          initial={{ opacity: 0, y: "200px" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 5 },
          }}
          viewport={{ once: true }}
        >
          <div className={styles.conceptContainer}>
            <img
              className={styles.conceptPhoto}
              src="https://images.unsplash.com/photo-1595263929828-220a718dfe44?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="field with ears of wheat and blue sky and sunset at the background"
            />
            <h2 className={styles.conceptHeader}>Why We Do What We Do?</h2>
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
              alt="a woman`s hand spreading the flour at the table"
            />
            <h2 className={styles.conceptHeader}>What We Do?</h2>
            <p>
              What do we do? We bring to you, our customer, a wide variety of
              fresh, whole-grain, artisan breads and pastries created with our
              own stone-milled flours. Our bakery is located in the Farmstead
              Farmer's Market and is the only bakery in the area milling our own
              flours. We also are one of the few places you can taste before you
              buy!
            </p>
          </div>
          <div className={styles.conceptContainer}>
            <img
              className={styles.conceptPhoto}
              src="https://images.unsplash.com/photo-1555951015-6da899b5c2cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="four different types of loaf stacked vertically and flour spreading on top of them "
            />
            <h2 className={styles.conceptHeader}>How We Do It?</h2>
            <p>
              We mill our flours fresh in our own stone mills. We use the most
              natural ingredients and keep our ingredient lists as short as
              possible. Our bakery is an open book. Literally. You can stop by
              and see everything we are doing - from the stone mills to the
              crafting of our artisan breads.
            </p>
          </div>
        </motion.div>

        <div className={styles.container}>
          <h1 className={styles.suppliers}>Our Suppliers</h1>
          <div className={styles.suppliersSection}>
            <motion.div
              className={styles.supplierContainer}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 5 },
              }}
              viewport={{ once: true }}
            >
              <h2 className={styles.suppliedProduct}>Flours</h2>
              <ul>
                <li>
                  Farm & Sparrow Organic heirloom stone-milled wheats and other
                  specialty flours
                </li>
                <li>Lindley Mills Organic NC 10th-generation mill</li>
                <li>Carolina Ground Carolinas-grown organic rye and spelt</li>
              </ul>
            </motion.div>
            <motion.div
              className={styles.supplierContainer}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 5, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <h2 className={styles.suppliedProduct}>Produce & Dairy</h2>
              <ul>
                <li>Mountain Foods Local Produce</li>
                <li>Farm to Home Milk Local Milk, Cream, and Eggs</li>
              </ul>
            </motion.div>
            <motion.div
              className={styles.supplierContainer}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 5, delay: 2 },
              }}
              viewport={{ once: true }}
            >
              <h2 className={styles.suppliedProduct}>Coffee, Tea, Herbs.</h2>
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
                  Matcha Nude Locally woman-owned, sustainable company sourcing
                  high quality organic Japanese matcha
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
