import styles from "./image.module.css";

const Image = ({ image, imageStyle, imageAlt }) => (
  <img
    src={`/src/img/${image}`}
    className={styles[imageStyle]}
    alt={imageAlt}
  />
);

export default Image;
