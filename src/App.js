import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import NotFound from "./pages/notFound/NotFound";
import Cart from "./pages/cart/Cart";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import Admin from "./pages/admin/Admin";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import ReviewProducts from "./components/review/reviewProducts/ReviewProducts";
import ListProductReview from "./components/review/listProductReview/ListProductReview";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reset",
        element: <Reset />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "checkout-details",
        element: <CheckoutDetails />,
      },
      {
        path: "checkout-success",
        element: <CheckoutSuccess />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/admin/*",
        element: (
          <AdminOnlyRoute>
            <Admin />
          </AdminOnlyRoute>
        ),
      },
      {
        path: "/order-history",
        element: <OrderHistory />,
      },
      {
        path: "order-details/:id",
        element: <OrderDetails />,
      },
      {
        path: "review-product/:id",
        element: <ReviewProducts />,
      },
      {
        path: "list-review-product/:id",
        element: <ListProductReview />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
