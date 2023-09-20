import React from "react";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center flex-col mx-auto w-[90%] my-20">
      <h2 className="mb-12 text-4xl text-gray-400">
        Are you sure you want to logout
      </h2>
      <div className="flex justify-between w-1/4">
        <button
          onClick={handleLogout}
          className="w-36 px-3 py-2 text-xl text-white capitalize bg-green-500 rounded-sm"
        >
          yes
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-36 px-3 py-2 text-xl text-white capitalize bg-red-500 rounded-sm"
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
