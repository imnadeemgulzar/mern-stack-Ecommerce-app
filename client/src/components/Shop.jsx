import React from "react";
import { useCart } from "../context/auth";

const Shop = () => {
  const { cart } = useCart();
  return (
    <div className="">
      {cart.map(item => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between px-10 py-4 my-2 rounded-lg shadow-xl"
          >
            <div className="w-36 flex items-center justify-between">
              <button className=" bg-slate-600 px-3 py-[2px] text-2xl text-white rounded-md">
                +
              </button>
              <button className=" bg-slate-600 px-3 py-[2px] text-2xl text-white rounded-md">
                -
              </button>
            </div>
            <div>
              <img src={item.thumbnail} alt="img" className="w-36 h-36" />
            </div>
            <div>{item.title}</div>
            <div className="w-36 flex items-center justify-between">
              <button className=" bg-slate-600 px-3 py-[2px] text-2xl text-white rounded-md">
                +
              </button>
              {10}
              <button className=" bg-slate-600 px-3 py-[2px] text-2xl text-white rounded-md">
                -
              </button>
            </div>
            <div>{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
