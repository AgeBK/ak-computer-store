import { useContext } from "react";
import { Link } from "react-router-dom";
import { ComputerContext } from "../../context";
import Img from "../Image";
import Error from "../Error";
import styles from "./Home.module.css";

function Home() {
  const { data, hyphenate } = useContext(ComputerContext);

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

  const HomePageData = () => (
    <article>
      <h2 className={styles.slogan}>
        All of your computer needs at the best prices guaranteed!!
      </h2>
      <section className={styles.container}>
        {categoriesArr?.map(({ productId, category, productPicUrl }) => {
          return (
            <div className={styles.category} key={productId}>
              <Link to={hyphenate(category)}>
                <div className={styles.imgCont}>
                  {/* redundant alt text so removed (WAVE tool) */}
                  <Img image={productPicUrl} imageStyle="home" imageAlt="" />
                </div>
                <h3>{category}</h3>
              </Link>
            </div>
          );
        })}
      </section>
    </article>
  );

  return categoriesArr.length ? <HomePageData /> : <Error />;
}

export default Home;
