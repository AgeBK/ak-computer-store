import React, { useContext, useMemo } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ComputerContext } from "../../context";
import Cart from "../../components/Cart";
import Img from "../../components/Image";
import Loading from "../../components/Loading";
import styles from "./MainContainer.module.css";

const MainContainer = ({ children }) => {
  const { loading, error } = useContext(ComputerContext);
  console.log("MM");

  const Content = () => {
    if (error) {
      console.log("error");
      return <div>Error</div>;
    } else if (loading) {
      console.log("loading");
      return <Loading />;
    } else {  
      return children;
    }
  };

  return (
    <Router>
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <Img image={"AK.png"} imageStyle="logo" imageAlt="AK Computers" />
            </Link>
          </div>
          <div className={styles.hdr}>
            <h1>
              AK <span>COMPUTERS</span>
            </h1>
          </div>
          <div className={styles.imgCont}>
            <Cart />
          </div>
        </header>
        <hr />
        <Content />
      </section>
    </Router>
  );
};
export default MainContainer;
