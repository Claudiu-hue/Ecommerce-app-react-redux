import React, { useEffect, useState } from "react";
import styles from "./ListProductReview.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import {
  STORE_REVIEWS,
  selectReviewHistory,
} from "../../../redux/slice/reviewSlice";
import spinnerImg from "../../../assets/spinner.jpg";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import ReviewContent from "../reviewContent/ReviewContent";
import { selectProducts } from "../../../redux/slice/productSlice";

const ListProductReview = () => {
  const { data, isLoading } = useFetchCollection("reviews");
  const reviews = useSelector(selectReviewHistory);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(STORE_REVIEWS(data));
  }, [dispatch, data]);

  const matchedReviewsWithProducts = reviews.reduce(
    (matchedReviews, review) => {
      const matchingProduct = products.find(
        (product) => review.productID === product.id,
      );

      if (matchingProduct) {
        matchedReviews.push({ review, product: matchingProduct });
      }

      return matchedReviews;
    },
    [],
  );
  console.log(matchedReviewsWithProducts);
  return (
    <section>
      <h2>List of the Reviews</h2>
      <div className={`container ${styles.reviewsList}`}>
        {matchedReviewsWithProducts === null ? (
          <img src={spinnerImg} alt="loading..." style={{ width: "50px" }} />
        ) : (
          matchedReviewsWithProducts.map((data) => (
            <ReviewContent data={data} />
          ))
        )}
      </div>
    </section>
  );
};

export default ListProductReview;
