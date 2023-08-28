import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import AddToCart from "../AddToCart";
import Sort from "../Sort";
import Img from "../Image";
import Price from "../Price";
import styles from "./Category.module.css";

function Category() {
  console.log("Category");

  const { data, deHyphenate, hyphenate } = useContext(ComputerContext);
  const [categoryArr, setCategoryArr] = useState(data);
  const { id } = useParams();
  let arr = [];

  console.log(data);
  console.log(id);

  arr = categoryArr.filter(({ category }) => hyphenate(category) === id);

  return (
    <>
      <article>
        <div className={styles.hdrCont}>
          <h2 className={styles.hdr}>{deHyphenate(id)}</h2>
          <span className={styles.results}>({arr.length})</span>
          <Sort props={[categoryArr, setCategoryArr]} />
        </div>
        <section className={styles.container}>
          {arr?.map(
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
                  <Link to={`/${id}/${productId}`} className={styles.itemCont}>
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
    </>
  );
}
export default Category;
