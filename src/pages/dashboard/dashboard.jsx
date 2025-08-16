import ActiveLoans from "@/assets/dashboard/business-fill.svg?react ";
import RejectedIcon from "@/assets/dashboard/cancel-fill.svg?react";
import AuthorizedIcon from "@/assets/dashboard/check-fill.svg?react";
import ActiveDepositIcon from "@/assets/dashboard/crowdsource.svg?react";
import SentIcon from "@/assets/dashboard/file.svg?react";
import DepositAccountIcon from "@/assets/dashboard/Loan-fill.svg?react";
import UnathorizedIcon from "@/assets/dashboard/minus.svg?react";
import CustomerBaseIcon from "@/assets/dashboard/Person-fill.svg?react";

const DashBoard = () => {
  return (
    <div className="bg-[#F6F8FA] p-[16px] flex flex-col gap-[10px] max-w-[1212px] overflow-hidden">
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
      <div className="rounded-[8px] bg-white flex flex-col p-[16px] gap-3">
        <p className="text-[#475569] font-medium text-[14px]">User metrics</p>
        <div className="flex gap-4">
          <div className="bg-[#F8FAFC] p-[16px] gap-[2px] flex flex-col w-[276px] rounded-[8px]">
            <div className="flex justify-between">
              <p className="text-[#475569] text-[14px] font-medium">
                Sent for Approval
              </p>
              <SentIcon className="w-[20px] h-[20px]"/>
            </div>
            <p className="text-[20px] font-semibold">346</p>
          </div>
          <div className="bg-[#F8FAFC] p-[16px] gap-[2px] flex flex-col w-[276px] rounded-[8px]">
            <div className="flex justify-between">
              <p className="text-[#475569] text-[14px] font-medium">
                UnAuthorized Transactions
              </p>
              <UnathorizedIcon className="w-[20px] h-[20px]" />
            </div>
            <p className="text-[20px] font-semibold">346</p>
          </div>
          <div className="bg-[#F8FAFC] p-[16px] gap-[2px] flex flex-col w-[276px] rounded-[8px]">
            <div className="flex justify-between">
              <p className="text-[#475569] text-[14px] font-medium">
                Authorized Transactions
              </p>
              <AuthorizedIcon className="w-[20px] h-[20px]" />
            </div>
            <p className="text-[20px] font-semibold">346</p>
          </div>
          <div className="bg-[#F8FAFC] p-[16px] gap-[2px] flex flex-col w-[276px] rounded-[8px]">
            <div className="flex justify-between">
              <p className="text-[#475569] text-[14px] font-medium">
                Rejected Transactions
              </p>
              <RejectedIcon className="w-[20px] h-[20px]" />
            </div>
            <p className="text-[20px] font-semibold">346</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
