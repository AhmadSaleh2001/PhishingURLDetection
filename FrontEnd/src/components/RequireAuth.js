import { useLocation, Outlet, Navigate } from "react-router-dom";
import React from "react";
import useAuth from "../Helpers/useAuth";
function RequireAuth() {
  let { User } = useAuth();
  let Loc = useLocation();
  return User ? <Outlet /> : <Navigate to={"/login"} />;
}

export default RequireAuth;
