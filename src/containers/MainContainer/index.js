import React, { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ComputerContext } from "../../context";
import Cart from "../../components/Cart";
import Img from "../../components/Image";
import Loading from "../../components/Loading";
import styles from "./MainContainer.module.css";

// function MainContainer(WrappedComponent) {
const MainContainer = ({ children }) => {
  const { loading, error } = useContext(ComputerContext);
  console.log("MM");

  return (
    <Router>
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <Img
                image={"AKComputerStore.png"}
                imageStyle="logo"
                imageAlt="AK Computers"
              />
              <Cart />
            </Link>
          </div>
          <div className={styles.hdr}>
            <h1>
              AK <span>COMPUTERS</span>
            </h1>
          </div>
          <div className={styles.imgCont}>
            <Img image={"cartEmpty.png"} imageStyle="cart" imageAlt="cart" />
          </div>
        </header>
        <hr />
        {children}
        {loading && <Loading />}
        {error && <div>Error</div>}
      </section>
    </Router>
  );
};
export default MainContainer;
