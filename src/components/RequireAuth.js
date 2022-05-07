import { useState } from "react";
import { Navigate } from "react-router-dom";
import AdminPage from "./AdminPage";
import Login from "./Login";

export const RequireAuth = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user === `${process.env.REACT_APP_ADMIN}`) {
    return <Navigate to="/admin" />;
  } else {
    return <Navigate to="/login" />;
  }
};
