import { Navigate } from "react-router-dom";

export const RequireAuth = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" />;
  }
};
