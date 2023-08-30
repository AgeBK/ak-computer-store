import React, { useContext, useRef } from "react";
import { ComputerContext } from "../../context";
import useOpen from "../../hooks/useOpen";
import Price from "../Price";
import Img from "../Image";
import styles from "./Cart.module.css";

function Cart() {
  console.log("Cart");
  const { addToCart, cart, removeFromCart } = useContext(ComputerContext);
  const [ref, isHover, handleClick] = useOpen();
  const highLightValue = useRef(0);
  const isTouchDevice = window.ontouchstart !== undefined;
  let highLight = false;

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

  const { totalPrice, totalQty } = cartDetails;
  const cartImage =
    totalQty && totalPrice ? "cartNotEmpty.png" : "cartEmpty.png";

  // make cart stand out on update
  if (totalQty !== highLightValue.current) {
    highLightValue.current = totalQty;
    highLight = true;
  } else {
    highLight = false;
  }

  const CartClosed = () => {
    return (
      <div className={styles.cartClosedCont}>
        <span
          className={`${styles.cartClosedQty}  ${
            highLight && styles.cartClosedContQty
          }`}
        >
          {totalQty}
        </span>
        <Img image={cartImage} imageStyle="cart" imageAlt="cart" />
      </div>
    );
  };

  const CartOpen = () => {
    return (
      <section className={styles.cart}>
        {isTouchDevice && <div className={styles.cartClose}>X</div>}
        <ul className={styles.list}>
          {Object.values(cart).map(({ productId, productName, qty, price }) => (
            <li className={styles.item} key={productId} value={productName}>
              <h3 className={styles.hdr}>{productName}</h3>
              <div className={styles.details}>
                {<span className={styles.qty}>Quantity: {qty}</span>}
                <Price props={[price, null, "cartItem"]} />
              </div>

              <div className={styles.buttons}>
                <span className={styles.oneItem}>
                  <button
                    onClick={(e) => {
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
          ))}
        </ul>
        <div className={styles.total}>
          <span>Total Items: {totalQty}</span>
          <Price props={[totalPrice, null, "cartItem"]} />
        </div>
      </section>
    );
  };

  return (
    <div className={styles.cartOuterContainer}>
      <div className={styles.container} ref={ref} onClick={handleClick}>
        {isHover && totalQty && totalPrice ? <CartOpen /> : <CartClosed />}
      </div>
    </div>
  );
}

export default Cart;
