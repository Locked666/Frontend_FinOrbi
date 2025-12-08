import { Navigate } from "react-router-dom";
import {} from "react";
import { useAuth } from "@/context/AuthContext";

export const PrivateRoute = ({ children }: { children: React.JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};
