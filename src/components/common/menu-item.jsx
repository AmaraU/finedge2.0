import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import X from "@/assets/x.svg?react";
import { setActiveMenu, removeMenu } from "@/store/reducers/menu.reducer";

const MenuItem = ({ menu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeMenu = useSelector((state) => state.menu.activeMenu);
  const allOpenedMenu = useSelector((state) => state.menu.allOpenedMenu);
  const handleUpdateActiveMenu = () => {
    dispatch(setActiveMenu(menu));
    navigate(menu.path);
  };

  const handleRemoveMenu = (e) => {
    e.stopPropagation();
    const isActiveTab = activeMenu && activeMenu.right === menu.right;

    dispatch(removeMenu(menu));

    if (isActiveTab) {
      const remainingMenus = allOpenedMenu.filter(
        (item) => item.right !== menu.right
      );

      if (remainingMenus.length > 0) {
        const lastMenu = remainingMenus[remainingMenus.length - 1];
        dispatch(setActiveMenu(lastMenu));
        navigate(lastMenu.path);
        console.log(lastMenu.path);
      } else {
        dispatch(setActiveMenu(null));
        navigate("/dashboard");
        console.log("/dashboard");
      }
    }
  };

  return (
    <div onClick={handleUpdateActiveMenu} className="flex ">
      <div className="flex  items-center px-[12px] py-[12px] border-[0.5px] border-[#CBD5E1] rounded-tl-[8px] rounded-tr-[8px] bg-white text-[10] font-medium gap-[6px]">
        <p>{menu.label}</p>
        <X
          onClick={handleRemoveMenu}
          className="h-[20px] w-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MenuItem;
