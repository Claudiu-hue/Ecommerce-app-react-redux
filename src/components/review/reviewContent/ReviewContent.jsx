import React from "react";
import styles from "./RevIewContent.module.scss";

const ReviewContent = ({ data }) => {
  return (
    <div className={styles.content}>
      <div>
        <p>
          <b>Product review:</b> {data.review.review}
        </p>
        <img
          src={data.product.imageURL}
          alt={data.product.name}
          style={{ width: "250px" }}
        />
      </div>
      <div>
        <p>
          <b>Rate:</b> {data.review.rate}
        </p>
        <p>
          <b>Price:</b> {data.product.price}
        </p>
        <p>
          <b>ReviewDate:</b> {data.review.reviewDate}
        </p>
      </div>
    </div>
  );
};

export default ReviewContent;
