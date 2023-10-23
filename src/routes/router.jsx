import * as React from "react";
import { createBrowserRouter, Route, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../pages/Home";
import Products from "../pages/Product/Products";
import NotFound from "../pages/NotFound";
import DisplayProduct from "../pages/Product/displayProduct";
import CartItems from "../pages/CartItems";

// Set the base name

const router = createBrowserRouter([
  {
    path: "/", // Use the base name here
    element: (
      <>
        <Header />
        <Outlet /> {/* This renders the nested routes */}
      </>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <DisplayProduct /> },
      { path: "cartitems", element: <CartItems /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
