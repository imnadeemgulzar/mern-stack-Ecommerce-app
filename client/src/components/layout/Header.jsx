import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Header = () => {
  //   const [auth, setAuth] = useState(localStorage.getItem("auth"));
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    const localStorageAuth = localStorage.getItem("auth");
    if (localStorageAuth !== auth) {
      setAuth(localStorageAuth);
    }
  }, [auth, setAuth]);
  return (
    <div>
      <nav className="flex justify-end gap-12 text-gray-100 bg-gray-800">
        {!auth ? (
          <>
            <Link
              to="/login"
              className="hover:bg-blue-500 px-6 py-2 text-lg rounded-sm"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:bg-blue-500 px-6 py-2 text-lg rounded-sm"
            >
              Register
            </Link>
          </>
        ) : (
          <Link
            to="/logout"
            className="hover:bg-blue-500 px-6 py-2 text-lg rounded-sm"
          >
            Logout
          </Link>
        )}

        <Link
          to="/shop"
          className="hover:bg-blue-500 px-6 py-2 text-lg rounded-sm"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="hover:bg-blue-500 px-6 py-2 text-lg rounded-sm"
        >
          About
        </Link>
        <Link to="/" className="hover:bg-blue-500 px-6 py-2 text-lg rounded-sm">
          Home
        </Link>
        <Link
          to="/contact"
          className="hover:bg-blue-500 px-6 py-2 text-lg rounded-sm"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
