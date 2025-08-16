import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/utils/routes";

const AuthGuard = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.AUTH.LOGIN} replace />;
};

export default AuthGuard;
