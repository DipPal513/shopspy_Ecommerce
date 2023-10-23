import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import data from '../../public/product_data.json'
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode")); // State to control dark mode
  const [networkError, setNetWorkError] = useState(false); // State to control dark mode

  useEffect(() => {
    // Fetch data from the API
    axios
       .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setNetWorkError(false);
      })
      .catch((error) => {
        if(error.message == "Network Error"){
          // setNetWorkError(!networkError);
        }
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(products);
  const defaultCart = () => {
    const cart = {};
    for (let product of products) {
      cart[product.id] = 0;
    }
    return cart;
  };

  useEffect(() => {
    setCartItems(defaultCart());
  }, [products]);

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "item added successfully",
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "item removed...",
    });
  };
  const contextValue = {
    products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    setProducts,
    darkMode,
    setDarkMode,
  };
  const errMsg = ()=>{
   
    Swal.fire({
      icon: "error",
      title: "No internet Connection",
    });
    console.log(
      "function fired...."
    )
  }

  networkError? errMsg() : console.log("connection restored");

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;