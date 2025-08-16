import FinEdgeLogo from "@/assets/finedge-logo.svg?react";
import Avatar from "@/assets/topbar/Avatars.svg?react";
import Chevron from "@/assets/topbar/chevron-down.svg?react";
import BreadCrumb from "@/components/common/breadcrumb";
import LabelValue from "@/components/common/label-value";
import Notification from "@/components/common/notification";
import SearchInput from "@/components/common/search-input";
import { formatCustomDate } from "@/utils/utils";

const TopBar = ({ pathnames }) => {
  return (
    <>
      <div className=" flex items-center px-4 py-3 gap-4 bg-white w-[1212px] overflow-hidden">
        <BreadCrumb pathnames={pathnames} />
        <hr className="w-px h-12 bg-gray-200 border-0" />
        <SearchInput />
        <hr className="w-px h-12 bg-gray-200 border-0" />
        <LabelValue
          label={"Approving Officer"}
          firstName={"Tochukwu"}
          lastName={"Mgbemena"}
        />
        <hr className="w-px h-12 bg-gray-200 border-0" />
        <p className="whitespace-pre-line font-medium text-[14px] text-[#64748B]">
          {formatCustomDate(Date.now())}
        </p>
        <hr className="w-px h-12 bg-gray-200 border-0" />
        <div className="flex gap-2 items-center">
          <Avatar />
          <Chevron />
        </div>
        <hr className="w-px h-12 bg-gray-200 border-0" />
        <Notification number={10} />
        <hr className="w-px h-12 bg-gray-200 border-0" />
        <FinEdgeLogo />
      </div>
      <hr className="border-gray-200" />
    </>
  );
};

export default TopBar;
