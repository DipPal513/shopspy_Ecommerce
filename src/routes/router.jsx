import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  }
  // {
  //   path: "",
  //   element: (
  //     <>
  //       <Header />
  //       <Outlet /> {/* This renders the nested routes */}
  //     </>
  //   ),
  //   children: [
  //     { path: "", element: <Home /> },
  //     { path: "products", element: <Products /> },
  //     { path: "product/:id", element: <DisplayProduct /> },
  //     { path: "cartitems", element: <CartItems /> }, // Use CartItems instead of CartItem
  //     { path: "*", element: <NotFound /> },
  //   ],
  // },
]);

export default router;
