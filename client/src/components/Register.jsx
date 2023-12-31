import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, email, password, "form data");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(res.data.message);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <h1 className="text-slate-500 my-12 text-4xl font-semibold text-center">
        Registration Form
      </h1>
      <form
        className="flex flex-col justify-center items-center max-w-[90rem] mx-auto py-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          className="px-8 py-4 rounded-lg bg-slate-100 w-[30%] my-4 text-xl"
          onChange={e => setName(e.target.value)}
          name={name}
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
