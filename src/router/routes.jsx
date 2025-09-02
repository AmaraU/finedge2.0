// src/router/routes.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";

import PrivateLayout from "@/components/layout/private-layout";
import Login from "@/pages/auth/login";
import DashBoard from "@/pages/dashboard/dashboard";
import { adminRoutes } from "@/router/admin-routes";
import AuthGuard from "@/router/auth-guard";
import { setUpRoutes } from "@/router/setup-routes";
import { ROUTES } from "@/utils/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.AUTH.LOGIN,
    element: <Login />,
  },
  {
    path: "/",
    element: <AuthGuard />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { path: "", element: <Navigate to="dashboard" replace /> },
          { path: "dashboard", element: <DashBoard /> },
          ...adminRoutes,
          ...setUpRoutes,
          { path: "*", element: <Navigate to={ROUTES.AUTH.LOGIN} replace /> },
        ],
      },
    ],
  },
]);

export default router;
