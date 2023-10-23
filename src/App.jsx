import React from "react";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";

import ShopContextProvider from "./context/ShopContext";
import Footer from "./Components/Footer";
function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
      <Footer />
    </ShopContextProvider>
  );
}

export default App;
