import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ComputerContext } from "../../context";
import Img from "../Image";
import styles from "./Home.module.css";

const Home = () => {
  const { data } = useContext(ComputerContext);

  // create list of unique categories from data
  const categoriesObj = data.reduce(
    (acc, { productId, category, productPicUrl }) => {
      acc = !acc[category]
        ? { ...acc, [category]: { productId, category, productPicUrl } }
        : acc;
      return acc;
    },
    {}
  );

  const categoriesArr = Object.values(categoriesObj);

  console.log(categoriesObj);
  console.log(Object.values(categoriesArr));

  // hyphenate spaces
  const catLowerCase = (cat) => cat.toLowerCase().replace(/ /gi, "-");

  return (
    <article>
      <div className={styles.intro}>
        All of your computer needs at the best prices guaranteed!!
      </div>
      <section className={styles.container}>
        {categoriesArr?.map(({ productId, category, productPicUrl }) => {
          return (
            <div className={styles.category} key={productId}>
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
        })}
      </section>
    </article>
  );
};

export default Home;
