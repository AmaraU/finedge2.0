import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import SideBar from "./sidebar";
import TopBar from "./topbar";
import MenuItem from "../common/menu-item";

const PrivateLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const { allOpenedMenu } = useSelector((state) => state.menu);


  return (
    <>
      <SideBar />
      <div className="ml-[250px]  min-h-screen">
        <TopBar pathnames={pathnames} />

        {pathnames[0] !== "dashboard" && (
          <div className="flex gap-2">
            {allOpenedMenu.map((menu, i) => (
              <MenuItem key={i} menu={menu} />
            ))}
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default PrivateLayout;
