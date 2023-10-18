import React from "react";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";

import ShopContextProvider from "./context/ShopContext";
function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
