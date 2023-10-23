import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaArrowLeft } from "react-icons/fa";
import BreadCrumb from "./BreadCrumb";
const DisplayProduct = () => {
  const navigate = useNavigate()
  const { products, addToCart } = useContext(ShopContext);
  const [displayImage,setDisplayImage] = useState()
  const { id } = useParams();
  const product = products.find((e) => e.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${
            i < rating ? "text-yellow-500" : "text-gray-300"
          } text-2xl`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };
const imageClickHandler = (e)=>{
  setDisplayImage(e.target.src)
}
  return (
    <>
    <div className="flex justify-center items-center  flex-col py-10">
      <div className="max-w-4xl w-full ">
      <BreadCrumb title={product.title}/>
     
        <div className="bg-gray-50 p-6 rounded-lg shadow-xl flex flex-col md:flex-row dark:bg-slate-800 dark:text-white">
          
          <div className="flex w-full md:w-1/2 pr-4 flex-col-reverse">
            <div className="side-images flex gap-x-7 mt-3">
            {product.images.slice(0,3).map(e => 
              <img src={e} className="w-[100px] object-cover" onClick={(e)=>imageClickHandler(e)}/>)}
            </div>
            <img
              src={!displayImage ? product.thumbnail : displayImage }
              alt={product.title}
              className="w-1/2 rounded-lg object-contain h-1/2" // Adjust the max-h value as needed
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-500 mb-4 text-sm dark:text-gray-200">{product.description}</p>
            <p className="text-gray-700 mb-4 dark:text-gray-400">Only {product.stock}(stcoks) Available</p>

            <div className="flex items-center mb-4">
              <div className="text-lg text-blue-600 font-semibold">
                ${product.price.toFixed(2)}
              </div>
              <div className="ml-2 flex space-x-1">
                {renderRatingStars(product.rating)}
                <span className="text-gray-500 text-lg">
                  ({product.numRatings} ratings)
                </span>
              </div>
            </div>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => addToCart(product.id)}
                className=" text-black px-4 py-2 border bg-gray-100  duration-500 hover:bg-white hover:shadow-lg"
              >
                Add to Cart
              </button>
              <button className=" text-black px-4 py-2 border bg-gray-100  duration-500 hover:bg-white hover:shadow-lg"onClick={() => {
                addToCart(product.id);
                navigate('/cartitems')
              }}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default DisplayProduct;
