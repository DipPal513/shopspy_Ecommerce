import React, { useState } from "react";

const handleCart = (product) => {
  const [cart, setCart] = useState([]);
  setCart([...cart, product]);
  return [cart,setCart];
};

export default handleCart;
