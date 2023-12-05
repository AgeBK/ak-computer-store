import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ComputerContext } from "../../context";
import AddToCart from "../AddToCart";
import Img from "../Image";
import Price from "../Price";
import SalesPitch from "../SalesPitch";
import Error from "../Error";
import PayOptions from "../PayOptions";
import styles from "./Product.module.css";

function Product() {
  const { data, hyphenate } = useContext(ComputerContext);
  const { id } = useParams();

  const product = data.find(({ productId }) => productId === id);

  const ProductData = () => {
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
        <article>
          <div className={styles.container}>
            <div className={styles.breadCrumb}>
              {mainCategory} <span className={styles.breadCrumbArrow}> - </span>
              <Link to={`/${hyphenate(category)}`} className={styles.category}>
                {category}
              </Link>
            </div>
            <section className={styles.container}>
              <h1 className={styles.hdr}>{productName}</h1>
              <div className={styles.priceCont}>
                <Price price={price} loc="product" sale={sale} />
                <PayOptions price={price} />
              </div>
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
                    <strong>Dimensions</strong>
                    <span className={styles.cm}>(cm)</span>
                    <ul>
                      <li>Height: {height}</li>
                      <li>Width: {width}</li>
                      <li>Depth: {depth}</li>
                    </ul>
                    <br />
                    <div className={styles.weight}>
                      <span>Weight: </span>
                      {weightMeasure}
                      {weightUnit}
                    </div>
                  </div>
                  <AddToCart
                    productId={productId}
                    productName={productName}
                    price={price}
                  />
                </section>
              </div>
            </section>
          </div>
        </article>
        <SalesPitch />
      </>
    );
  };

  return product ? <ProductData /> : <Error />;
}

export default Product;
