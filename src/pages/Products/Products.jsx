import React, { useState } from "react";
import { productsData } from "../../data/productsData";
import styles from "./Products.module.css";
import Button from "../../ui-kit/Button/Button";
import { ReactComponent as Cart } from "../../images/cart.svg";
import { ReactComponent as InCart } from "../../images/check.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

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
    <div>
      <h1 className={styles.header}>
        <em>Products</em>
      </h1>
      <p className={styles.description}>
        Our products are handmade with intention, integrity, and aesthetic
        sensibility — our hope is that each of our creations is received as a
        gift and creates space for a moment of appreciation.
      </p>
      <div className={styles.btnContainer}>
        <Button
          variant="primary"
          label="Bread"
          padding="padding-even"
          onClick={() => selectedProduct("bread")}
        />
        <Button
          variant="primary"
          label=" Pastry"
          padding="padding-even"
          onClick={() => selectedProduct("pastry")}
        />
        <Button
          variant="primary"
          label="Show All"
          padding="padding-even"
          onClick={() => setProducts(productsData)}
        />
      </div>
      <div className={styles.productsContainer}>
        {products.map((item) => {
          const { id, name, price, description, image } = item;
          return (
            <div>
              <div className={styles.productInfo}>
                <h3>{name}</h3>
                <h4> $ {price}</h4>
              </div>
              <div key={id} className={styles.productCard}>
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
                    icon={Cart}
                    onClick={() => handleAddToCart(item)}
                  />
                ) : (
                  <Button
                    variant="primary"
                    label="Added to cart"
                    padding="padding-even"
                    icon={InCart}
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
