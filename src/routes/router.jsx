import * as React from "react";
import { createBrowserRouter, Route, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../pages/Home";
import Products from "../pages/Product/Products";
import NotFound from "../pages/NotFound";
import DisplayProduct from "../pages/Product/displayProduct";
import CartItem from "../pages/CartItems";
import CartItems from "../pages/CartItems";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Header />
        <Outlet /> {/* This renders the nested routes */}
      </>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <DisplayProduct /> },
      { path: "products", element: <Products /> },
      { path: "cartitems", element: <CartItems /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
