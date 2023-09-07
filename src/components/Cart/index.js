import React, { useContext } from "react";
import { ComputerContext } from "../../context";
import useCartState from "../../hooks/useCartState";
import Price from "../Price";
import Img from "../Image";
import Button from "../Button";
import styles from "./Cart.module.css";

function Cart() {
  const { addToCart, cart, removeFromCart } = useContext(ComputerContext);
  const [ref, isOpen, isTouchDevice, handleClose] = useCartState();

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

  const CartClosed = () => {
    return (
      <div className={styles.cartClosedCont}>
        <span
          className={`${styles.cartClosedQty}  ${
            totalQty && styles.cartClosedContQty
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
        {isTouchDevice && (
          <div className={styles.cartClose} onClick={handleClose}>
            X
          </div>
        )}
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
                  <Button
                    onClick={(e) => {
                      removeFromCart(productId, false);
                    }}
                    css="btn"
                  >
                    -
                  </Button>
                  <span className={styles.amount}>{qty}</span>
                  <Button
                    onClick={() => {
                      addToCart(productId, productName, price);
                    }}
                    css="btn"
                  >
                    +
                  </Button>
                </span>
                <Button
                  onClick={(e) => {
                    removeFromCart(productId, true);
                  }}
                  css="removeBtn"
                >
                  Remove
                </Button>
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
      <div className={styles.container} ref={ref}>
        {isOpen && totalQty && totalPrice ? <CartOpen /> : <CartClosed />}
      </div>
    </div>
  );
}

export default Cart;
