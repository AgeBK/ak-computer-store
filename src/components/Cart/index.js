import React, { useEffect, useState, useContext } from "react";
import { ComputerContext } from "../../context";
import useHover from "../../useHover";

import Img from "../Image";
import styles from "./Cart.module.css";

function Cart() {
  const { addToCart, cart, currency, removeFromCart } =
    useContext(ComputerContext);

  const [ref, isHover] = useHover();

  const cartDetails = Object.values(cart).reduce(
    (acc, { qty, price }) => {
      acc.totalQty += qty;
      acc.totalPrice += price * qty;
      return acc;
    },
    {
      totalQty: 0,
      totalPrice: 0,
    }
  );
  // console.log(cartDetails);

  const { totalPrice, totalQty } = cartDetails;
  const cartImage =
    totalQty && totalPrice ? "cartNotEmpty.png" : "cartEmpty.png";

  const CartClosed = () => {
    return (
      <div className={styles.cartClosedCont}>
        <span className={styles.cartClosedQty}>{totalQty}</span>
        <Img image={cartImage} imageStyle="cart" imageAlt="cart" />
      </div>
    );
  };

  const CartOpen = () => {
    return (
      <section className={styles.cart}>
        <div className={styles.items}>
          <ul className={styles.list}>
            {Object.values(cart).map(
              ({ productId, productName, qty, price }) => (
                <li className={styles.item} key={productId} value={productName}>
                  <h3 className={styles.hdr}>{productName}</h3>
                  <div className={styles.details}>
                    {<span className={styles.qty}>Quantity: {qty}</span>}
                    <div className={styles.price}>{currency(price)}</div>
                  </div>
                  <div className={styles.buttons}>
                    <span className={styles.oneItem}>
                      <button
                        onClick={(e) => {
                          // e.stopPropagation();
                          removeFromCart(productId, false);
                        }}
                        value="-"
                        className={styles.btn}
                      >
                        -
                      </button>
                      <span className={styles.amount}>{qty}</span>
                      <button
                        onClick={(e) => {
                          // e.stopPropagation();
                          addToCart(productId, productName, price);
                        }}
                        value="+"
                        className={styles.btn}
                      >
                        +
                      </button>
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(productId, true);
                      }}
                      className={styles.remove}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.total}>
          <span>Total Items: {totalQty}</span>
          <span>Total: {currency(totalPrice)}</span>
        </div>
      </section>
    );
  };

  return (
    <div className={styles.cartOuterContainer} ref={ref}>
      <div className={styles.container}>
        {isHover && totalQty && totalPrice ? <CartOpen /> : <CartClosed />}
      </div>
    </div>
  );
}

export default Cart;
