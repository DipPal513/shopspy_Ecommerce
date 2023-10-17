import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
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

    Swal.fire({
      icon: "success",
      title: "item added successfully",
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));

    Swal.fire({
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
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
