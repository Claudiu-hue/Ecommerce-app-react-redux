import React from "react";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import Card from "../../card/Card";

const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {
  const shortenTest = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const addToCart = () => {};

  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$${price}`}</p>
          <h4>{shortenTest(name, 18)}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenTest(desc, 200)}</p>}
        <button className="--btn --btn-danger" onClick={() => addToCart()}>
          Add To Cart
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
