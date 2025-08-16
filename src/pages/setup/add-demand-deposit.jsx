import { useState } from "react";

import Chevron from "@/assets/topbar/chevron-down.svg?react";
import Box from "@/components/common/box";
import DateInput from "@/components/common/date-input";

const AddDemandDeposit = () => {
  const [step] = useState(1);
  return (
    <>
      <Box>
        <div className="h-[600px]">
          <div className="flex justify-between py-[12px] px-[16px]">
            <p className="text-[#334155] flex flex-row items-center gap-2">
              <Chevron className="rotate-[90deg]" />
              Add demand deposit
            </p>
            <p className="text-[#64748B] font-medium text-[14px]">
              {step} of 3
            </p>
          </div>
          <p className="text-[#64748B] font-medium text-[14px] bg-[#F8FAFC]  py-[12px] px-[16px] border-y-[1px] border-[#ECEFF3]">
            Product Basic Detail
          </p>
          <div class="grid grid-cols-3 gap-[20px] px-[16px] py-[12px]">
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Product Code <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Product Name <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
             <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">Product Class <span className="text-red-600">*</span></p>
              <input className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]" type="text" />
            </div>
             <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">Product Currency <span className="text-red-600">*</span></p>
              <input className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]" type="text" />
            </div>
             <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">Start Date <span className="text-red-600">*</span></p>
              <input   placeholder="-- Select start date --" className=" py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"  />
            </div>
             <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">Expiry Date <span className="text-red-600">*</span></p>
              <input  className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]" type="text" />
            </div>
            <div>
              <DateInput/>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default AddDemandDeposit;
