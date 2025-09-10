import { useState } from "react";

import Reset from "@/assets/circle-arrow.svg?react";
import Next from "@/assets/next.svg?react";
import Chevron from "@/assets/topbar/chevron-down.svg?react";
import Box from "@/components/common/box";
import Button from "@/components/common/button";
import AddDemandDepositStep1 from "@/components/setup/demand-deposit/add-demand-1";
import AddDemandDepositStep2 from "@/components/setup/demand-deposit/add-demand-2";

const AddDemandDeposit = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Box>
        <div className="">
          <div className="flex justify-between py-[12px] px-[16px]">
            <p className="text-[#334155] flex flex-row items-center gap-2">
              <Chevron className="rotate-[90deg]" />
              Add New Demand Deposit Product
            </p>
            <p className="text-[#64748B] font-medium text-[14px]">
              {step} of 3
            </p>
          </div>
        
          {step === 1 && <AddDemandDepositStep1 />}
          {step === 2 && <AddDemandDepositStep2 />}
          <hr className="border-gray-200 " />
          <div className="flex justify-end gap-4 px-[16px] py-[12px]">
            {step === 1 && (
              <Button
                variant="primary"
                className="bg-[#EEF2FF] text-black mt-[16px] mb-[16px] "
              >
                Reset <Reset className="w-4 h-4 fill-black" />
              </Button>
            )}
            {step > 1 && (
              <Button
                onClick={() => setStep(step - 1)}
                variant="primary"
                className="bg-[#EEF2FF] text-black mt-[16px] mb-[16px] "
              >
                <Next className="w-3 h-3 stroke-black rotate-180" />
                Back{" "}
              </Button>
            )}

            <Button
              onClick={() => setStep(step + 1)}
              variant="primary"
              className="mt-[16px] mb-[16px] bg-[#4338CA]"
            >
              Next <Next className="w-3 h-3 stroke-white" />
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default AddDemandDeposit;
