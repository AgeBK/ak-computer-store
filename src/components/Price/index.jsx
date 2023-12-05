import { useContext } from "react";
import { ComputerContext } from "../../context";
import styles from "./Price.module.css";

const Price = ({ price, loc, sale }) => {
  const { currency } = useContext(ComputerContext);

  return price ? (
    <div className={styles[loc]}>
      <span className={styles.price}>
        <span className={styles.dollar}>$</span>
        {currency(price)}
      </span>
      {sale && <span className={styles.sale}>{`${sale}% OFF`}</span>}
    </div>
  ) : null;
};

export default Price;
