import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";

const Logout = () => {
  useEffect(() => {
    doSignOut();
  }, []);

  return <Navigate to="/login"/>;
};

export default Logout;
