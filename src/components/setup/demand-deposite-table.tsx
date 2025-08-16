import React from "react";

import Pen from "@/assets/pen.svg?react";

const DemandDepositTable = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            scope="col"
            className=" py-3 text-start  font-medium text-gray-500"
          >
            Product Code
          </th>
          <th
            scope="col"
            className=" py-3 text-start  font-medium text-gray-500"
          >
            Product Name
          </th>
          <th
            scope="col"
            className=" py-3 text-start  font-medium text-gray-500"
          >
            Product Class
          </th>
          <th
            scope="col"
            className=" py-3 text-start  font-medium text-gray-500"
          >
            Product Type
          </th>
          <th scope="col" className=" py-3 text-end  font-medium text-gray-500">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {[...Array(12)].map((i) => {
          return (
            <tr key={i} className="text-[#64748B] font-medium text-[14px]">
              <td className=" py-4 whitespace-nowrap text-sm font-medium">
                Prod-DFF-001
              </td>
              <td className=" py-4 whitespace-nowrap text-sm ">
                Test Current Account
              </td>
              <td className=" py-4 whitespace-nowrap text-sm">
                Demand Deposit
              </td>
              <td className=" py-4 whitespace-nowrap text-sm">
                Current Account
              </td>
              <td className=" py-4 whitespace-nowrap text-end text-sm font-medium">
                <Pen className=" cursor-pointer inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DemandDepositTable;
