import React from "react";
import styles from "./Price.module.css";

const Price = ({ props }) => {
  const currency = (val) => {
    return val
      .toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD",
      })
      .replace(".00", "")
      .substr(1); // just show $ if no cents value
  };

  const [price, sale, loc] = props;
  // console.log(loc);

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
