import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { BiHeart } from "react-icons/bi";

const Product = ({ products, load}) => {
  const { addToCart } = useContext(ShopContext);
  const [active , setActive] = useState(false);
  const total = !load ? 9 : -1;
  console.log(active)
  return (
    <>
      {products?.slice(0,total).map((product) => (
        <div
          key={product.id}
          className={`bg-white dark:bg-gray-700  p-4 shadow-lg mb-4 hover:shadow relative overflow-hidden`}
          // onMouseOver={()=> setActive(!active)}
        >
          <div className="relative h-64 overflow-hidden dark:text-white">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover -z-10"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-100">
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
            <p className="text-gray-600 font-semibold mt-2 dark:text-gray-100">
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
                hover:text-white transition duration-300 border-0 rounded-none dark:bg-white dark:hover:bg-blue-400">
                  Details
                </button>
              </Link>
            </div>
          </div>
          <div className={`icon absolute ${active ?"right-0 flex" : "right-[-10000] hidden"} bottom-1/3 shadow-lg w-10 h-8  items-center justify-center duration-500 transition `}>
            <BiHeart size={20}/>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
