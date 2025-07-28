import { createBrowserRouter, Navigate } from "react-router-dom";

import PrivateLayout from "@/components/layout/private-layout";
import Login from "@/pages/auth/login";
import DashBoard from "@/pages/dashboard/dashboard";
import { adminRoutes } from "@/router/admin-routes";
import { setUpRoutes } from "@/router/setup-routes";
import { ROUTES } from "@/utils/routes";

const { AUTH } = ROUTES;
const loggedIn = true;

const router = createBrowserRouter([
  {
    path: AUTH.LOGIN,
    element: <Login />,
  },
  {
    path: "/",
    element: loggedIn ? (
      <PrivateLayout />
    ) : (
      <Navigate to={AUTH.LOGIN} replace />
    ),
    children: [
      ...adminRoutes,
      ...setUpRoutes,
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "*",
        element: <Navigate to={AUTH.LOGIN} replace />,
      },
    ],
  },
]);

export default router;
