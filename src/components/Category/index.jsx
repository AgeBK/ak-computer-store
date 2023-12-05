import { useContext, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import AddToCart from "../AddToCart";
import Sort from "../Sort";
import Img from "../Image";
import Price from "../Price";
import Error from "../Error";
import styles from "./Category.module.css";

function Category() {
  const { data, hyphenate, deHyphenate } = useContext(ComputerContext);
  const [categoryData, setCategoryData] = useState(null);
  const { id } = useParams();

  const cachedData = useMemo(
    () => data.filter(({ category }) => hyphenate(category) === id),
    [data, hyphenate, id]
  );

  let category = categoryData || cachedData;

  return category.length ? (
    <article>
      <div className={styles.hdrCont}>
        <h2 className={styles.hdr}>{deHyphenate(id)}</h2>
        <span className={styles.results}>({category.length})</span>
        <Sort catArr={category} setCatArr={setCategoryData} />
      </div>
      <section className={styles.container}>
        {category?.map(
          ({
            productId,
            productName,
            productPicUrl,
            price,
            description,
            sale,
          }) => {
            return (
              <div className={styles.product} key={productId}>
                <Link to={`/${id}/${productId}`} className={styles.itemCont}>
                  <h3 className={styles.title}>{productName}</h3>
                  <Img
                    image={productPicUrl}
                    imageStyle="category"
                    imageAlt={productName}
                  />
                  <Price price={price} loc="category" sale={sale} />
                  <div className={styles.description}>{description}</div>
                </Link>
                <AddToCart
                  productId={productId}
                  productName={productName}
                  price={price}
                />
              </div>
            );
          }
        )}
      </section>
    </article>
  ) : (
    <Error />
  );
}
export default Category;
