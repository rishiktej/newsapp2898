import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/signin";
import Register from "../components/auth/signup";
import Home from "../components/home/index";
import React from "react";
import Logout from "../components/home/logout";
import Articleview from "../components/home/articleview";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element:<Home />
  },
      {
        path: "/home/:articleId",
        element: < Articleview />,
      },
  {
    path: "/signout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <Login />,
  },
]);

export default router;
