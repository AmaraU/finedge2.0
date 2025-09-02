import { useState } from "react";

import Chevron from "@/assets/topbar/chevron-down.svg?react";
import Box from "@/components/common/box";
import DateInput from "@/components/common/date-input";

const AddDemandDeposit = () => {
  const [step] = useState(1);
  return (
    <>
      <Box>
        <div className="">
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
              <p className="text-[#64748B] font-medium text-[14px]">
                Product Class <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Product Currency <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Start Date <span className="text-red-600">*</span>
              </p>
              <DateInput placeholder="--Select start date--" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Expiry Date <span className="text-red-600">*</span>
              </p>
              <DateInput placeholder="--Select Expiry date--" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Opening Balance <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Opening Balance<span className="text-red-600">*</span>
              </p>
              <select class="p-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]">
                <option selected="">-- Select a Product Type --</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Closing Balance <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Min Balance for Interest <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Interest Calc Basis <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
              <p className="text-[#9CA3AF] font-medium text-[12px]">
                (Days) -Total No Of Days in a year for Processing
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                OD Penalty Rate
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
              <p className="text-[#9CA3AF] font-medium text-[12px]">
                %(Annualize)
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Max NDIC Limit
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Short Name
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
          </div>
          <p className="text-[#64748B] font-medium text-[14px] bg-[#F8FAFC]  py-[12px] px-[16px] border-y-[1px] border-[#ECEFF3]">
            Interest
          </p>
          <div class="grid grid-cols-3 gap-[20px] px-[16px] py-[12px]">
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Credit Interest Type <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
              <p className="text-[#9CA3AF] font-medium text-[12px]">
                (Per annum)
              </p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Debit Interest Type <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
              <p className="text-[#9CA3AF] font-medium text-[12px]">
                (Per annum)
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Interest Days <span className="text-red-600">*</span>
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
              <p className="text-[#9CA3AF] font-medium text-[12px]">(Days)</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-[#64748B] font-medium text-[14px]">
                Maximum Withdrawal Allowed for Interest
              </p>
              <input
                className="py-[4px] rounded-[6px] bg-[#F8FAFC] w-full border-[#ECEFF3] border-[1px]"
                type="text"
              />
            </div>
          </div>
          <hr className="border-gray-200 mb-4" />
          <div></div>
        </div>
      </Box>
    </>
  );
};

export default AddDemandDeposit;
