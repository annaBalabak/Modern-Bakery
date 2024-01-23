import React, { useState } from "react";
import { productsData } from "../../data/productsData";
import styles from "./Products.module.css";
import Button from "../../ui-kit/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { motion } from "framer-motion";
import { ICONS } from "../../images/Icons";
import { Heading } from "../../ui-kit/Heading/Heading";

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [products, setProducts] = useState(productsData);

  const selectedProduct = (searchTerm) => {
    const newProduct = productsData.filter(
      (element) => element.searchTerm === searchTerm
    );
    setProducts(newProduct);
  };
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className={styles.container}>
      <Heading title="Products" />
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 3 },
        }}
        viewport={{ once: true }}
      >
        Our products are handmade with intention, integrity, and aesthetic
        sensibility — our hope is that each of our creations is received as a
        gift and creates space for a moment of appreciation.
      </motion.p>
      <div className={styles.btnContainer}>
        <motion.div
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 3 },
          }}
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            label="Bread"
            padding="padding-even"
            onClick={() => selectedProduct("bread")}
            viewport={{ once: true }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 3 },
          }}
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            label=" Pastry"
            padding="padding-even"
            onClick={() => selectedProduct("pastry")}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 3 },
          }}
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            label="Show All"
            padding="padding-even"
            onClick={() => setProducts(productsData)}
          />
        </motion.div>
      </div>
      <div className={styles.productsContainer}>
        {products.map((item) => {
          const { id, name, price, description, image } = item;
          return (
            <div key={id} className={styles.cardContainer}>
              <div className={styles.productInfo}>
                <h3>{name} </h3>
                {""}
                <h4>Price: ${price}</h4>
              </div>
              <div className={styles.productCard}>
                <img
                  className={styles.cardImage}
                  src={image}
                  alt="bakery products"
                />
                <p className={styles.cardDescription}>{description}</p>
              </div>
              <div className={styles.cart}>
                {!isProductInCart(id) ? (
                  <Button
                    variant="primary"
                    label="Add to cart"
                    padding="padding-even"
                    onClick={() => handleAddToCart(item)}
                  />
                ) : (
                  <Button
                    variant="primary"
                    label="Added to cart"
                    padding="padding-even"
                    icon={ICONS.InCart}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
