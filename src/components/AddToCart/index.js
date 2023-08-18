import React, { useContext } from "react";
import { ComputerContext } from "../../context";
import styles from "./AddToCart.module.css";

const AddToCart = ({ props }) => {
  console.log("addtocart");

  const { addToCart } = useContext(ComputerContext);
  const [productId, productName, price] = props;

  return (
    <button
      className={styles.cart}
      onClick={(e) => {
        e.stopPropagation();
        addToCart(productId, productName, price);
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
