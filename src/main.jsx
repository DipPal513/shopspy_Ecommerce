import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import Header from './Components/Header.jsx'
import ShopContextProvider from './context/ShopContext'
import ScrollToTop from 'react-scroll-to-top'
// import ShopContextProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    {/* <Header /> */}
    <RouterProvider router={router} />
    {
      window.scrollY > 100 &&
    <ScrollToTop smooth />
    }

  </ShopContextProvider>
);
