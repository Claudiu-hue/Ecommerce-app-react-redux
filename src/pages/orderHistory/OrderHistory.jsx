import React from "react";
import styles from "./OrderHistory.module.scss";
import useFetchCollection from "../../customHooks/useFetchCollection";
import loadingImg from "../../assets/spinner.jpg";

const OrderHistory = () => {
  const { data, isLoading } = useFetchCollection("orders");

  return (
    <section>
      <div className={`container ${styles.order}`}>
        <h2>Your Order History</h2>
        <p>
          Open an order to leave a <b>Product Review</b>
        </p>
        <br />
        <>
          {isLoading && <img src={loadingImg} alt="loading..." />}
          <div className={styles.table}></div>
        </>
      </div>
    </section>
  );
};

export default OrderHistory;
