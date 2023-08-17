import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import Img from "../Image";
import Loading from "../Loading";
import styles from "./Product.module.css";

function Product() {
  const { data, addToCart } = useContext(ComputerContext);
  const { id } = useParams();
  let product = {};

  if (data.length) {
    product = data.find(({ productId }) => productId === id);
    console.log(product);
  }

  const { productId, productName, productPicUrl, price, description, sale } =
    product;

  const handleCart = () => addToCart(productId, productName, price);

  return (
    <>
      {data.length ? (
        <article>
          <div>
            <h1>{productName}</h1>
            <section>
              {[
                productId,
                productName,
                productPicUrl,
                price,
                description,
                sale,
              ]}
            </section>
            <Img
              image={productPicUrl}
              imageStyle="product"
              imageAlt={productName}
            />
            <button className={styles.cart} onClick={handleCart}>
              Add to cart
            </button>
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
