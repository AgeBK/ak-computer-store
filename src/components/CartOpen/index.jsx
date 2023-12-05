import { useContext } from "react";
import { ComputerContext } from "../../context";
import Price from "../Price";
import Button from "../Button";
import styles from "./CartOpen.module.css";

function CartOpen({ totalPrice, totalQty, isTouchDevice, handleClose }) {
  const { addToCart, cart, removeFromCart } = useContext(ComputerContext);

  return (
    <section className={styles.cart}>
      {isTouchDevice && (
        <div
          className={styles.cartClose}
          onClick={handleClose}
          onKeyDown={handleClose}
          role="button"
          tabIndex="0"
        >
          X
        </div>
      )}
      <ul className={styles.list}>
        {Object.values(cart).map(({ productId, productName, qty, price }) => (
          <li className={styles.item} key={productId} value={productName}>
            <h3 className={styles.hdr}>{productName}</h3>
            <div className={styles.details}>
              {<span className={styles.qty}>Quantity: {qty}</span>}
              <Price price={price} loc="cartItem" />
            </div>

            <div className={styles.buttons}>
              <span className={styles.oneItem}>
                <Button
                  onClick={() => {
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
                onClick={() => {
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
        <Price price={totalPrice} loc="cartItem" />
      </div>
    </section>
  );
}

export default CartOpen;
