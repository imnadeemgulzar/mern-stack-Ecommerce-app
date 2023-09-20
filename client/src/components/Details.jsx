import React, { useEffect, useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useCart } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [count, setCount] = useState(0);
  const getProduct = async () => {
    try {
      const result = await axios.get(
        `https://dummyjson.com/products/${productId}`,
      );
      const product = await result.data;
      setProductData(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    console.log(productData);
  }, [productData]);

  const handleAddToCart = () => {
    if (productData) {
      addToCart(productData);
      setCount(count + 1);
    }
  };

  const goToCart = () => {
    navigate("/shop");
  };

  return (
    <div className=" shadow-gray-400 p-4 my-8 rounded-lg shadow-md cursor-pointer">
      <img
        src={productData?.thumbnail}
        alt="img"
        className="h-[350px] w-[50%] mx-auto my-4"
      />
      <div className=" text-slate-100 border-slate-200 flex items-center justify-between px-4 py-4 my-4 text-xl font-semibold bg-gray-800 border-t-2 rounded-lg">
        <p className="flex justify-between w-1/4 p-4 text-gray-800 bg-gray-200 rounded-lg">
          <span>Product Name: </span>
          {<span>{productData?.title}</span>}
        </p>
        <p className="flex justify-between w-1/4 p-4 text-gray-800 bg-gray-200 rounded-lg">
          <span>Price: </span>
          {<span>${productData?.price}</span>}
        </p>
        <p className="flex justify-between w-1/4 p-4 text-gray-800 bg-gray-200 rounded-lg">
          <span>Rating: </span>
          {<span>{productData?.rating}</span>}
        </p>
      </div>
      <div className=" text-slate-500 flex items-center justify-between pt-2 my-4 text-xl font-semibold">
        <p className="flex justify-between w-1/4 p-4 text-gray-800 bg-gray-200 rounded-lg">
          <span>Category: </span>
          {<span>{productData?.category}</span>}
        </p>
        <p className="flex justify-between w-1/4 p-4 text-gray-800 bg-gray-200 rounded-lg">
          <span>Discount: </span>
          {<span>{productData?.discountPercentage} %</span>}
        </p>
      </div>
      <div className="flex items-center justify-between my-4 text-xl font-semibold">
        <p className="flex justify-between w-1/4 p-4 text-gray-800 bg-gray-200 rounded-lg">
          <span>Stock: </span>
          {<span>{productData?.stock} items</span>}
        </p>
        <p className="flex justify-between w-1/4 p-4 text-gray-800 bg-gray-200 rounded-lg">
          <span>Brand: </span>
          {<span>{productData?.brand}</span>}
        </p>
      </div>
      <p className="text-slate-800 my-8 text-xl text-center">{`Description: ${productData?.description}`}</p>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={handleAddToCart}
          className="px-8 py-3 text-xl text-center text-white bg-green-600 rounded-lg"
        >
          Add To Cart
          <span className="px-3 py-1 ml-8 text-2xl text-white bg-gray-800 rounded-full">
            {cart.length}
          </span>
        </button>
        <button
          onClick={goToCart}
          className="w-44 flex items-center justify-between px-6 py-3 text-xl text-center text-white bg-blue-500 rounded-lg"
        >
          Show Cart
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Details;
