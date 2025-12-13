import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx"; // import useAuth

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // use the hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
