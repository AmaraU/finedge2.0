import { Outlet, useLocation } from "react-router-dom";

import DashboardLayout from "./dashboard-layout";
import TopBar from "./topbar";

const PrivateLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <>
      <DashboardLayout />
      <div className="ml-[250px]">
        <TopBar pathnames={pathnames} />
        <p>Private Layout</p>

        <Outlet />
      </div>
    </>
  );
};

export default PrivateLayout;
