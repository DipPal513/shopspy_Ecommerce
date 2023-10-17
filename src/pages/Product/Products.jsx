import React, { useContext, useState } from "react";
import Product from "./Product";
import { ShopContext } from "../../context/ShopContext";
import { FaArrowLeft } from "react-icons/fa";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

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
  const { products } = useContext(ShopContext);
  // Define the number of skeleton items you want to display
  const Navigate = useNavigate();
  const location = useLocation();

  if (products.length === 0) {
    return <SkeletonLoader />;
  }

  return (
    <div className="all_products mt-10 py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        {location.pathname !== "/" ? (
          <button
            onClick={() => Navigate(-1)} // Go back to the previous page
            className="p-2 text-red-500 hover:text-red-800 flex items-center mb-5 bg-white shadow
      "
          >
            <FaArrowLeft size={30} />
          </button>
        ) : (
          ""
        )}
        <h2 className="text-3xl  mb-3">ALL PRODUCTS</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          <Product products={products} load={load} />
          <div className="text-center w-full flex justify-center">
            {!load ? (
              <button
                className=" bg-red-500 shadow-xl px-6 py-4 hover:shadow-none hover:bg-blue-500 text-white transition duration-300"
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
