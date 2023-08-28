import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart";
import Img from "../../components/Image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <Img image={"AK.png"} imageStyle="logo" imageAlt="AK Computers" />
        </Link>
      </div>
      <h1 className={styles.hdr}>
        AK <span>COMPUTERS</span>
      </h1>
      <div className={styles.imgCont}>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
