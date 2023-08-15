import React, { useContext } from "react";
import { ComputerContext } from "../../context";
import Img from "../Image";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const { data } = useContext(ComputerContext);

  // create list of unique categories from data
  const categories = data.reduce(
    (acc, { productId, category, productPicUrl }) => {
      acc = !acc[category]
        ? { ...acc, [category]: { productId, category, productPicUrl } }
        : acc;
      return acc;
    },
    {}
  );

  console.log(categories);
  console.log(Object.values(categories));

  const catLowerCase = (cat) => cat.toLowerCase().replace(/ /gi, "-");

  return (
    <article>
      <div>
        <h1>Home</h1>
      </div>
      <section className={styles.container}>
        {Object.values(categories).map(
          ({ productId, category, productPicUrl }) => {
            return (
              <div className={styles.category} key={category}>
                <Link to={catLowerCase(category)} className={styles.link}>
                  <div className={styles.imgCont}>
                    <Img
                      image={productPicUrl}
                      imageStyle="home"
                      imageAlt={category}
                    />
                  </div>
                  <h2 className={styles.h2}>{category}</h2>
                </Link>
              </div>
            );
          }
        )}
      </section>
    </article>
  );
};

export default Home;
