import ActiveLoans from "@/assets/dashboard/business-fill.svg?react ";
import ActiveDepositIcon from "@/assets/dashboard/crowdsource.svg?react";
import DepositAccountIcon from "@/assets/dashboard/Loan-fill.svg?react";
import CustomerBaseIcon from "@/assets/dashboard/Person-fill.svg?react";
const DashBoard = () => {
  return (
    <div className="bg-[#F6F8FA] p-[16px] flex flex-col gap-[40px]">
      <div className="flex gap-[16px] flex-col">
        <p className="font-medium text-[14px] ">Executive Dashboard</p>
        <div className="flex gap-[24px]">
          <div className="bg-white w-[283px] p-[16px] rounded-[8px] flex flex-col gap-[24px]">
            <CustomerBaseIcon />
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#475569] font-medium text-[16px]">
                Customer Base
              </p>
              <p className="text-[24px]  font-semibold">6592</p>
            </div>
          </div>
          <div className="bg-white w-[283px] p-[16px] rounded-[8px] flex flex-col gap-[24px]">
            <ActiveDepositIcon />
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#475569] font-medium text-[16px]">
                Deposit Accounts
              </p>
              <p className="text-[24px]  font-semibold">4980</p>
            </div>
          </div>
          <div className="bg-white w-[283px] p-[16px] rounded-[8px] flex flex-col gap-[24px]">
            <DepositAccountIcon />

            <div className="flex flex-col gap-[8px]">
              <p className="text-[#475569] font-medium text-[16px]">
                Active Loans
              </p>
              <p className="text-[24px]  font-semibold">345</p>
            </div>
          </div>
          <div className="bg-white w-[283px] p-[16px] rounded-[8px] flex flex-col gap-[24px]">
            <ActiveLoans />

            <div className="flex flex-col gap-[8px]">
              <p className="text-[#475569] font-medium text-[16px]">
                Active Fixed Deposit
              </p>
              <p className="text-[24px]  font-semibold">876</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[8px] bg-white h-[100px]">

      </div>
    </div>
  );
};

export default DashBoard;
