import styles from "./PayOptions.module.css";
import Img from "../Image";

function PayOptions({ price }) {
  const paymentArr = ["afterPay", "zip"];

  const Info = ({ val }) =>
    val === "afterPay" ? (
      <div className={styles.info}>4 payments of ${(price / 4).toFixed(2)}</div>
    ) : (
      <div className={styles.info}>From $10.00 per week</div>
    );

  return (
    <ul className={styles.list}>
      {paymentArr.map((val, ind) => (
        <li key={ind}>
          <Img image={`payment/${val}.jpg`} imageStyle="" imageAlt={val} />
          <Info val={val} />
        </li>
      ))}
    </ul>
  );
}

export default PayOptions;
