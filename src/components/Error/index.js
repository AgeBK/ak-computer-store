import React from "react";
import { Link } from "react-router-dom";
import Img from "../Image";
import styles from "./Error.module.css";

function Error() {
  return (
    <section className={styles.container}>
      <Img image={"sad.png"} imageStyle="error" imageAlt="error" />
      <br />
      <div className={styles.error}>
        <h2 className={styles.hdr}>
          <strong>Whoops!!</strong>
          <br /> Something has gone wrong
        </h2>
        <div className={styles.info}>Sorry for the inconvenience</div>
        <Link to="/" className={styles.link}>
          Back to homepage
        </Link>
      </div>
    </section>
  );
}

export default Error;
