import React from "react";
import styles from "./Admin.module.scss";
import Navbar from "../../components/admin/navbar/Navbar";
import Home from "../../components/admin/home/Home";
import { useRoutes } from "react-router-dom";
import AddProduct from "../../components/admin/addProduct/AddProduct";

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
