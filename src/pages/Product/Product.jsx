import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ products, load}) => {
  const { addToCart } = useContext(ShopContext);
  const [active , setActive] = useState(false);
  const total = !load ? 9 : -1;
  return (
    <>
      {products?.slice(0,total).map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 shadow-lg mb-4 hover:shadow"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover -z-10"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600">
              {product.description.length > 150
                ? `${product.description.slice(0, 150)}...`
                : product.description}
            </p>
            {product.description.length > 150 && (
              <Link to={`/product/${product.id}`}>
                <button className="text-blue-500 hover:underline mt-2">
                  See More
                </button>
              </Link>
            )}
            <p className="text-gray-600 font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-4">
              <button
                className="bg-white shadow hover:text-white px-4 py-2 hover:bg-indigo-700 transition duration-300 border-0 rounded-none"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`}>
                <button className=" ms-4 bg-white-600 text-black shadow px-4 py-2 hover:bg-red-500
                hover:text-white transition duration-300 border-0 rounded-none">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
