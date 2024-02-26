import React from "react";
import styles from "./Admin.module.scss";
import Navbar from "../../components/admin/navbar/Navbar";
import Home from "../../components/admin/home/Home";
import { useRoutes } from "react-router-dom";
import AddProduct from "../../components/admin/addProduct/AddProduct";
import ViewProducts from "../../components/admin/viewProducts/ViewProducts";
import Orders from "../../components/admin/orders/Orders";
import OrderDetails from "../../components/admin/orderDetails/OrderDetails";

const Admin = () => {
  const adminRoutes = useRoutes([
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "add-product/:id",
      element: <AddProduct />,
    },
    {
      path: "all-products",
      element: <ViewProducts />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "order-details/:id",
      element: <OrderDetails />,
    },
  ]);

  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>{adminRoutes}</div>
    </div>
  );
};

export default Admin;
