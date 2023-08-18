import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import AddToCart from "../AddToCart";
import Loading from "../Loading";
import Sort from "../Sort";
import Img from "../Image";
import Price from "../Price";
import styles from "./Category.module.css";

function Category() {
  console.log("Category");

  const { data, error } = useContext(ComputerContext);
  const [categoryArr, setCategoryArr] = useState([]);
  const { id } = useParams();
  // let categoryArr = [];
  console.log(data);

  useEffect(() => {
    if (data.length) {
      // hyphenate spaces
      const catLowerCase = (cat) => cat.toLowerCase().replace(/ /gi, "-");
      // filter data arr by category
      const arr = data.filter(({ category }) => catLowerCase(category) === id);
      setCategoryArr(arr);
    }
  }, [data, id]);

  return (
    <>
      {categoryArr.length ? (
        <article>
          <div>
            <h2 className={styles.hdr}>{id}</h2>
            <h2 className={styles.results}>{categoryArr.length} Results</h2>
            <Sort props={[categoryArr, setCategoryArr]} />
          </div>
          <hr />
          <section className={styles.container}>
            {categoryArr?.map(
              ({
                productId,
                productName,
                productPicUrl,
                price,
                description,
                sale,
                wish,
              }) => {
                return (
                  <div className={styles.product} key={productId}>
                    <Link
                      to={`/${id}/${productId}`}
                      className={styles.itemCont}
                    >
                      <h2 className={styles.title}>{productName}</h2>
                      <div className={styles.imgCont}>
                        <Img
                          image={productPicUrl}
                          imageStyle="category"
                          imageAlt={productName}
                        />
                      </div>
                      <Price props={[price, sale]} />
                      <div className={styles.description}>{description}</div>
                    </Link>
                    <AddToCart props={[productId, productName, price]} />
                  </div>
                );
              }
            )}
          </section>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Category;
