import React, { useContext, useState } from "react";
import Product from "./Product";
import { ShopContext } from "../../context/ShopContext";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SkeletonLoader = () => {
  const skeletonItems = Array.from({ length: 6 }, (_, index) => (
    <div
      key={index}
      className="skeleton-loader h-64 w-full rounded-lg mb-4"
    ></div>
  ));

  return (
    <div className="all_products mt-10 py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skeletonItems}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [load, isLoad] = useState(false);

  const { products, setProducts } = useContext(ShopContext);
  const Navigate = useNavigate();
  const location = useLocation();

  // Filter products by category (e.g., phone, tablet, laptop)
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default: All products

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category == selectedCategory);

  if (products.length === 0) {
    return <SkeletonLoader />;
  }
  console.log(selectedCategory);
  console.log(filteredProducts);

  return (
    <div className="all_products mt-10 py-10 dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto px-4">
        {location.pathname !== "/" ? (
          <button
            onClick={() => Navigate(-1)} // Go back to the previous page
            className="p-2 text-red-500 hover:text-red-800 flex items-center mb-5 bg-white shadow"
          >
            <FaArrowLeft size={30} />
          </button>
        ) : (
          ""
        )}

        <h2 className="text-3xl mb-3 dark:text-white">ALL PRODUCTS</h2>

        {/* Category Selector */}
        <div className="mb-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-2 py-1 border rounded-md focus:outline-none
    hover:text-red-500 bg-white shadow-md hover:shadow-lg transition duration-300"
          >
            <option value="all">All</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="groceries">Groceries</option>
            <option value="skincare">skincare</option>
            <option value="home-decoration">home-decoration</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          <Product products={filteredProducts} load={load} />
          <div className="text-center w-full flex justify-center">
            {!load && selectedCategory == "all" ? (
              <button
                className="bg-red-500 shadow-xl px-6 py-4 hover:shadow-none hover:bg-blue-500 text-white transition duration-300"
                onClick={() => isLoad(!load)}
              >
                {!load ? "LOAD MORE" : "Loading.."}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
