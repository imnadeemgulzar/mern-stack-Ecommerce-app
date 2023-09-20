import {
  AiFillPlusCircle,
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMinus,
} from "react-icons/ai";
import { BsFillPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import { GrAdd } from "react-icons/gr";
import { useCart } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const { cart, setCart, removeFromCart } = useCart();
  let [itemCount, setItemCount] = useState(1);

  const handleAddItem = itemId => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setItemCount((itemCount += 1));
    setCart(updatedCart);
  };
  const handleRemoveItem = itemId => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setItemCount((itemCount -= 1));
    // }
    setCart(updatedCart);
  };

  return (
    <div className="">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-20">
          <h1 className=" mb-8 text-3xl text-gray-900">No items in the cart</h1>
          <button
            onClick={() => navigate("/")}
            className="w-44 flex items-center justify-between px-6 py-3 text-xl text-center text-white bg-blue-500 rounded-lg"
          >
            Add Items
            <AiOutlineArrowRight />
          </button>
        </div>
      ) : (
        cart.map(item => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between px-10 py-4 my-2 rounded-lg shadow-xl"
            >
              <div className="w-36 flex items-center justify-between">
                <AiOutlineClose
                  size={20}
                  onClick={() => removeFromCart(item.id)}
                />
                <AiOutlineHeart size={20} className="" />
              </div>
              <div>
                <img src={item.thumbnail} alt="img" className="w-36 h-36" />
              </div>
              <div className="text-xl font-bold">{item.title}</div>
              <div className="w-36 flex items-center justify-between">
                <BsFillPatchPlusFill
                  onClick={() => handleAddItem(item.id)}
                  className=""
                  size={32}
                />
                {item.quantity}
                <BsPatchMinusFill
                  size={32}
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
              <div className="text-lg font-bold">
                ${item.price * item.quantity}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Shop;
