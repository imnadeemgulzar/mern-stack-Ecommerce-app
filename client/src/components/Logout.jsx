import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col mx-auto w-[90%] my-20">
      <h2 className="text-4xl text-gray-400 mb-12">
        Are you sure you want to logout
      </h2>
      <div className="flex justify-between w-1/4">
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            navigate("/");
          }}
          className="px-3 py-2 rounded-sm text-xl capitalize bg-green-500 w-36 text-white"
        >
          yes
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-3 py-2 rounded-sm text-xl capitalize bg-red-500 w-36 text-white"
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
