import React, { useContext } from "react";
import { ComputerContext } from "../../context";
import styles from "./Price.module.css";

const Price = ({ props }) => {
  const { currency } = useContext(ComputerContext);
  const [price, sale, loc] = props;

  return (
    <div className={`${styles.priceCont} ${styles[loc]}`}>
      <span className={styles.price}>
        <span className={styles.dollar}>$</span>
        {currency(price)}
      </span>
      {sale && <span className={styles.sale}>{`${sale}% OFF`}</span>}
    </div>
  );
};

export default Price;
