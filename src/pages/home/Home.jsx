import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import { selectBillingAddress } from "../../redux/slice/checkoutSlice";

const Home = () => {
  const url = window.location.href;
  const selectBilling = useSelector(selectBillingAddress);

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({ top: 700, behavior: "smooth" });
      }
      return;
    };

    scrollToProducts();
  }, [url]);

  return (
    <div>
      <Slider />
      <Product />
    </div>
  );
};

export default Home;
