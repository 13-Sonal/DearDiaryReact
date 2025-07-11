import React from "react";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";


const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
