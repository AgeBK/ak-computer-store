import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import AddToCart from "../AddToCart";
import Sort from "../Sort";
import Img from "../Image";
import Price from "../Price";
import styles from "./Category.module.css";

function Category() {
  console.log("Category");

  const { data } = useContext(ComputerContext);
  const [categoryArr, setCategoryArr] = useState([]);
  const { id } = useParams();
  console.log(data);

  useEffect(() => {
    console.log("Category UE");
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
      {categoryArr && (
        <article>
          <div>
            <h2 className={styles.hdr}>{id}</h2>
            <span className={styles.results}>({categoryArr.length})</span>
            <Sort props={[categoryArr, setCategoryArr]} />
          </div>
          {/* <hr /> */}
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
                      <Price props={[price, sale, "category"]} />
                      <div className={styles.description}>{description}</div>
                    </Link>
                    <AddToCart props={[productId, productName, price]} />
                  </div>
                );
              }
            )}
          </section>
        </article>
      )}
    </>
  );
}
export default Category;
