import ManageUsers from "@/pages/admin/manage-users";
import MapGl from "@/pages/admin/map-gl";
import { ROUTES } from "@/utils/routes";

const { ADMIN } = ROUTES;

export const adminRoutes = [
  {
    path: ADMIN.MANAGE_USERS,
    element: <ManageUsers />,
  },
  {
    path: ADMIN.MAP_GL,
    element: <MapGl />,
  },
];
