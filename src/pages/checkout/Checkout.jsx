import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Checkout = () => {
  const [message, setMessage] = useState("Initializing checkout...");
  const [clientSecret, setClientSecret] = useState("");

  return <div>Checkout</div>;
};

export default Checkout;
