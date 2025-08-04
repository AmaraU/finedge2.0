// AppRouter.tsx
import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router-dom";

import PrivateLayout from "@/components/layout/private-layout";
import Login from "@/pages/auth/login";
import DashBoard from "@/pages/dashboard/dashboard";
import { adminRoutes } from "@/router/admin-routes";
import { setUpRoutes } from "@/router/setup-routes";
import { ROUTES } from "@/utils/routes";

const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const router = createBrowserRouter([
    {
      path: ROUTES.AUTH.LOGIN,
      element: <Login />,
    },
    {
      path: "/",
      element: isLoggedIn ? (
        <PrivateLayout />
      ) : (
        <Navigate to={ROUTES.AUTH.LOGIN} replace />
      ),
      children: [
        {
          path: "",
          element: <Navigate to="dashboard" replace />,
        },
        ...adminRoutes,
        ...setUpRoutes,
        {
          path: "dashboard",
          element: <DashBoard />,
        },
        {
          path: "*",
          element: <Navigate to={ROUTES.AUTH.LOGIN} replace />,
        },
      ],
    },
  ]);

  return router;
};

export default AppRouter;
