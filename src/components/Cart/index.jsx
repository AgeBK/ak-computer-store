import { useContext } from "react";
import { ComputerContext } from "../../context";
import useCartState from "../../hooks/useCartState";
import CartOpen from "../CartOpen";
import CartClosed from "../CartClosed";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useContext(ComputerContext);
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

  return (
    <div className={styles.cartOuterContainer}>
      <div className={styles.container} ref={ref}>
        {isOpen && totalQty && totalPrice ? (
          <CartOpen
            totalPrice={totalPrice}
            totalQty={totalQty}
            isTouchDevice={isTouchDevice}
            handleClose={handleClose}
          />
        ) : (
          <CartClosed totalPrice={totalPrice} totalQty={totalQty} />
        )}
      </div>
    </div>
  );
}

export default Cart;
