import { Navigate } from "react-router-dom";
import React from "react";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signup" replace />;
  }
  return <>{children}</>;
}
