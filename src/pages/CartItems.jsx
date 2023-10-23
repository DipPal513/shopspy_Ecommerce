import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router v6
import { FaArrowLeft } from "react-icons/fa"; // Import the arrow icon
import { ShopContext } from "../context/ShopContext";

const CartItems = () => {
  const { cartItems, products, removeFromCart, addToCart } =
    useContext(ShopContext);
  const navigate = useNavigate(); // Get the navigation function

  // Function to calculate the total quantity and sum
  const calculateTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    for (let productId in cartItems) {
      const quantity = cartItems[productId];
      const product = products.find((p) => p.id === parseInt(productId));

      if (product) {
        totalQuantity += quantity;
        totalPrice += quantity * product.price;
      }
    }

    return { totalQuantity, totalPrice };
  };

  const { totalQuantity, totalPrice } = calculateTotal();

  return (
    <div className="container mx-auto mt-10">
      {/* Add the Go Back button with the arrow icon */}

      <div className="flex items-start mb-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="p-2 text-red-500 hover:text-red-800 flex items-center dark:bg-gray-500 shadow"
        >
          <FaArrowLeft size={30} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row shadow-md my-10">
        <div className="w-full md:w-3/4 bg-white dark:bg-gray-800 px-4 md:px-10 py-4 md:py-10">
          <div className="flex justify-between border-b pb-4 md:pb-8">
            <h1 className="font-semibold text-xl md:text-2xl dark:text-white">Shopping Cart</h1>
            <h2 className="font-semibold text-xl md:text-2xl dark:text-white">
              {totalQuantity} Items
            </h2>
          </div>
          <div className="flex flex-col mt-4 md:mt-10 mb-4 md:mb-5 dark:text-white">
            <div className="hidden md:flex mb-2">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 dark:text-gray-300">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 dark:text-gray-300 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center dark:text-gray-300">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center dark:text-gray-300">
                Total
              </h3>
            </div>
            {products.map((product) => {
              const quantity = cartItems[product.id];
              if (quantity > 0) {
                return (
                  <div
                    className="flex items-center hover:bg-gray-100
                  hover:dark:bg-gray-700 -mx-4 md:-mx-8 px-4 md:px-6 py-4 md:py-5"
                    key={product.id}
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img
                          className="h-24 w-24"
                          src={product.thumbnail}
                          alt={product.title}
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">
                          {product.title}
                        </span>
                        <span className="text-red-500 text-xs">
                          {product.brand}
                        </span>
                        <button
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                          onClick={() => removeFromCart(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-center flex items-center gap-x-2 justify-center w-1/5">
                      <span
                        className="cursor-pointer"
                        style={{ fontSize: "20px" }}
                        onClick={() => removeFromCart(product.id)}
                      >
                        -
                      </span>
                      <span className="font-bold text-sm">{quantity}</span>
                      <span
                        className=" cursor-pointer"
                        style={{ fontSize: "20px" }}
                        onClick={() => addToCart(product.id)}
                      >
                        +
                      </span>
                    </div>
                    <span className=" w-1/5 font-semibold text-sm">
                      ${product.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm ">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div
          id="summary"
          className="w-full md:w-1/4 px-4 md:px-8 py-4 md:py-10 dark:text-white"
        >
          <h1 className="font-semibold text-xl md:text-2xl border-b pb-4 md:pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-4 md:mt-10 mb-4 md:mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {totalQuantity}
            </span>
            <span className="font-semibold text-sm">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-2 md:mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="mt-4 md:mt-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-2 md:mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-4 md:px-5 py-2 text-sm text-white uppercase mt-4 md:mt-8">
            Apply
          </button>
          <div className="border-t mt-4 md:mt-8">
            <div className="flex font-semibold justify-between py-4 md:py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate(-1)} // Go back to the previous page
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 md:py-3 text-sm text-black uppercase w-full"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
