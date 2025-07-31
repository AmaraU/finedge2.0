import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import SideBar from "./sidebar";
import TopBar from "./topbar";
import TabItem from "../common/tab";

const PrivateLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const { allOpenedMenu } = useSelector((state) => state.menu);
  console.log(allOpenedMenu);

  return (
    <>
      <SideBar />
      <div className="ml-[250px] bg-[#F6F8FA] min-h-screen">
        <TopBar pathnames={pathnames} />

        <div className="flex gap-2">
          {allOpenedMenu.map((name, i) => (
            <TabItem key={i} name={name} />
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default PrivateLayout;
