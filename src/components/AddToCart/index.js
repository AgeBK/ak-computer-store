import React, { useContext } from "react";
import { ComputerContext } from "../../context";
import styles from "./AddToCart.module.css";

const AddToCart = ({ props }) => {
  const { addToCart } = useContext(ComputerContext);
  const [productId, productName, price] = props;

  const handleClick = () => {
    addToCart(productId, productName, price);
  };

  return (
    <button className={styles.cart} onClick={handleClick}>
      Add to cart
    </button>
  );
};

export default AddToCart;
