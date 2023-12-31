import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        setAuth({
          ...auth,
          user: res?.data,
        });
        localStorage.setItem("auth", JSON.stringify(res?.data));
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <h1 className="text-slate-500 my-12 text-4xl font-semibold text-center">
        Login Form
      </h1>
      <form
        className="flex flex-col justify-center items-center max-w-[90rem] mx-auto py-8"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="px-8 py-4 rounded-lg bg-slate-100 w-[30%] my-4 text-xl"
          onChange={e => setEmail(e.target.value)}
          name={email}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="px-8 py-4 rounded-lg bg-slate-100 w-[30%] my-4 text-xl"
          onChange={e => setPassword(e.target.value)}
          name={password}
        />
        <button
          type="submit"
          className="px-8 py-4 rounded-lg bg-green-500 w-[30%] my-4 text-white text-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
