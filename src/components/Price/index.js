import React from "react";
import styles from "./Price.module.css";

const Price = ({ props }) => {
  const currency = (val) => {
    return val
      .toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD",
      })
      .replace(".00", ""); // just show $ if no cents value
  };

  const [price, sale] = props;
  return (
    <div className={styles.priceCont}>
      <span className={styles.price}>{currency(price)}</span>
      {sale && <span className={styles.sale}>{`${sale}% OFF`}</span>}
    </div>
  );
};

export default Price;
