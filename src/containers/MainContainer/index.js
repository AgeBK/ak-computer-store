import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import styles from "./MainContainer.module.css";

function MainContainer({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <Content props={children} />
      <Footer />
    </div>
  );
}
export default MainContainer;
