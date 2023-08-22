import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ComputerContext } from "../../context";
import Img from "../../components/Image";

import styles from "./Cart.module.css";

const Cart = (props) => {
  console.log("Cart");

  //   const [data, setData] = useState({});
  const { cart, loading } = useContext(ComputerContext);
  console.log(cart);
  console.log(loading);

  //   useEffect(() => {
  //     console.log("Cart UE");

  //     setData(cart);
  //   }, [cart]);

  return (
    <section className={styles.container}>
      <div>Cart</div>

      <div className={styles.cartCont}>
        {Object.values(cart).map((val) => (
          <div key={val.productId}>
            <span className={styles.product}>{val.productName}</span>
            <span className={styles.qty}>{val.qty}</span>
            <span className={styles.product}>{val.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
