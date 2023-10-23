import React from "react";

const cartReducer = (state, action) => {
  if (action.type == "ADD_TO_CART") {
    const { products } = action.payload;
    return {
      ...state,
      cart: [...state.cart,
      products]
    };
  }
};

export default cartReducer;
