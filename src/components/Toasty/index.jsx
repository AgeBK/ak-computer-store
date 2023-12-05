import { useContext, useEffect, useState } from "react";
import { ComputerContext } from "../../context";
import Img from "../Image";
import styles from "./Toasty.module.css";

function Toasty() {
  const {
    product: { productName, date },
  } = useContext(ComputerContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (date) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1500);
    }
  }, [date]);

  if (productName && show) {
    return (
      <div className={styles.toasty}>
        <div className={styles.toastyImg}>
          <Img image="tick.png" imageStyle="tick" imageAlt="success" />
        </div>
        <div className={styles.toastyTxt}>
          <b>{productName}</b>
          <br />
          added to cart
        </div>
      </div>
    );
  }
  return null;
}

export default Toasty;
