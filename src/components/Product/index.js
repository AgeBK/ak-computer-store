import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import AddToCart from "../AddToCart";
import Loading from "../Loading";
import Img from "../Image";
import Price from "../Price";
import styles from "./Product.module.css";

function Product() {
  const { data, addToCart } = useContext(ComputerContext);
  const { id } = useParams();
  let product = {};

  if (data.length) {
    product = data.find(({ productId }) => productId === id);
    console.log(product);
  }

  const {
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

  const handleCart = () => addToCart(productId, productName, price);

  return (
    <>
      {data.length ? (
        <article className={styles.container}>
          <div>
            <h1 className={styles.hdr}>{productName}</h1>
            <Price props={[price, sale]} />
            <div className={styles.infoCont}>
              <div className={styles.info}>
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
                  <div className={styles.width}>
                    <span>Width:</span>
                    {width}
                  </div>
                  <div className={styles.depth}>
                    <span>Depth:</span>
                    {depth}
                  </div>
                  <div className={styles.height}>
                    <span>Height:</span>
                    {height}
                  </div>
                  <div className={styles.weight}>
                    <span>Weight:</span>
                    {weightMeasure}
                    {weightUnit}
                  </div>
                </div>
                <AddToCart props={[productId, productName, price]} />
              </section>
            </div>
          </div>
          <hr />
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Product;
