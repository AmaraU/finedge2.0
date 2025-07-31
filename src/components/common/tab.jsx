import { useDispatch } from "react-redux";

import X from "@/assets/x.svg?react";
import { setActiveMenu, removeMenu } from "@/store/reducers/menu.reducer";

const TabItem = ({ name }) => {
  const dispatch = useDispatch();
  const handleUpdateActiveMenu = () => {
    dispatch(setActiveMenu(name));
  };

  const handleRemoveMenu = () => {
    dispatch(removeMenu(name));
  };
  return (
    <div onClick={handleUpdateActiveMenu} className="flex ">
      <div className="flex  items-center px-[12px] py-[12px] border-[0.5px] border-[#CBD5E1] rounded-tl-[8px] rounded-tr-[8px] bg-white text-[10] font-medium gap-[6px]">
        <p>{name}</p>
        <X  onClick={handleRemoveMenu} className="h-[20px] w-[20px] cursor-pointer" />
      </div>
    </div>
  );
};

export default TabItem;
