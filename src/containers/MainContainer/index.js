import React, { useContext, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ComputerContext } from "../../context";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import styles from "./MainContainer.module.css";

function MainContainer({ children }) {
  const { loading, error } = useContext(ComputerContext);
  console.log("MM");

  const test = useMemo(() => children, [children]); // TODO: ??

  const Content = () => {
    if (error) {
      console.log("error");
      return <Error />;
    } else if (loading) {
      console.log("loading");
      return <Loading />;
    } else {
      return test;
    }
  };

  return (
    <Router>
      <main className={styles.container}>
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
      </main>
    </Router>
  );
}
export default MainContainer;
