import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import AddToCart from "../AddToCart";
import Img from "../Image";
import Price from "../Price";
import SalesPitch from "../SalesPitch";
import styles from "./Product.module.css";

function Product() {
  console.log("Product");
  const { data, hyphenate } = useContext(ComputerContext);
  const { id } = useParams();
  let product = {};

  if (data.length) {
    product = data.find(({ productId }) => productId === id);
    console.log(product);
  }

  const {
    mainCategory,
    category,
    productId,
    productName,
    productPicUrl,
    price,
    description,
    sale,
    quantity,
    width,
    depth,
    height,
    weightMeasure,
    weightUnit,
  } = product;

  return (
    <>
      {!!data.length && (
        <>
          <article>
            <div className={styles.container}>
              <div className={styles.breadCrumb}>
                {mainCategory}{" "}
                <span className={styles.breadCrumbArrow}> - </span>
                <Link
                  to={`/${hyphenate(category)}`}
                  className={styles.category}
                >
                  {category}
                </Link>
              </div>
              <div>
                <h1 className={styles.hdr}>{productName}</h1>
                <Price props={[price, sale, "product"]} />
                <div className={styles.infoCont}>
                  <div className={styles.imgCont}>
                    <Img
                      image={productPicUrl}
                      imageStyle="product"
                      imageAlt={productName}
                    />
                  </div>
                  <section>
                    <div className={styles.desc}>{description}</div>
                    <div className={styles.qty}>
                      <strong>Available</strong> - There are {quantity} in stock
                    </div>
                    <div className={styles.dimensions}>
                      <strong>
                        Dimensions <span>(cm's)</span>
                      </strong>
                      <ul>
                        <li>Height: {height}</li>
                        <li>Width: {width}</li>
                        <li>Depth: {depth}</li>
                      </ul>
                      <div className={styles.weight}>
                        <span>Weight: </span>
                        {weightMeasure}
                        {weightUnit}
                      </div>
                    </div>
                    <AddToCart props={[productId, productName, price]} />
                  </section>
                </div>
              </div>
            </div>
          </article>
          <SalesPitch />
        </>
      )}
    </>
  );
}
export default Product;
