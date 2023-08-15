import React from "react";
import styles from "./image.module.css";

const Img = ({ image, imageStyle, imageAlt }) => (
  <img
    src={require("../../img/" + image)}
    className={styles[imageStyle]}
    alt={imageAlt}
  />
);

export default Img;
