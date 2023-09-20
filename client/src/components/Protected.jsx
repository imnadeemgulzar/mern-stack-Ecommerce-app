import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Protected = props => {
  const navigate = useNavigate();
  const { Child } = props;
  useEffect(() => {
    let auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Child />
    </div>
  );
};

export default Protected;
