import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import Loading from "../Loading";
import Img from "../Image";
import styles from "./Category.module.css";

function Category() {
  const { data, addToCart } = useContext(ComputerContext);
  const { id } = useParams();
  let categoryArr = [];
  console.log(data);

  if (data.length) {
    // hyphenate spaces
    const catLowerCase = (cat) => cat.toLowerCase().replace(/ /gi, "-");

    // filter data arr by category
    categoryArr = data.filter(({ category }) => catLowerCase(category) === id);
    console.log(categoryArr);
  }

  // const addToCart = (productId, productName, price) => {
  //   console.log(productId, productName, price);
  // };

  return (
    <>
      {categoryArr.length ? (
        <article>
          <div>
            <h1>Category</h1>
            <h2 className={styles.results}>{categoryArr.length} Results</h2>
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
                  <div className={styles.item} key={productId}>
                    <Link
                      to={`/${id}/${productId}`}
                      className={styles.itemCont}
                    >
                      <div className={styles.hdr}>
                        <h2 className={styles.title}>{productName}</h2>
                      </div>
                      <div className={styles.imgCont}>
                        <Img
                          image={productPicUrl}
                          imageStyle="category"
                          imageAlt={productName}
                        />
                      </div>
                      <div className={styles.priceCont}>
                        <span className={styles.price}>{price}</span>
                        {sale && (
                          <span className={styles.sale}>{`${sale}% OFF`}</span>
                        )}
                      </div>
                      <div className={styles.description}>{description}</div>
                    </Link>
                    <button
                      className={styles.cart}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(productId, productName, price);
                      }}
                    >
                      Add to cart
                    </button>
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
