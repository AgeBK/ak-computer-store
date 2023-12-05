import Img from "../Image";
import styles from "./CartClosed.module.css";

function CartClosed({ totalPrice, totalQty }) {
  const cartImage =
    totalQty && totalPrice ? "cartNotEmpty.png" : "cartEmpty.png";

  return (
    <div className={styles.cartClosedCont}>
      <span
        className={`${styles.cartClosedQty} ${
          totalQty ? styles.cartClosedContQty : ""
        }`}
      >
        {totalQty}
      </span>
      <Img image={cartImage} imageStyle="cart" imageAlt="cart" />
    </div>
  );
}

export default CartClosed;
