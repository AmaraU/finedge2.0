import { Link } from "react-router-dom";

import Plus from "@/assets/add.svg?react";
import Box from "@/components/common/box";
import Button from "@/components/common/button";
import Pagination from "@/components/common/pagination";
import SearchInput from "@/components/common/search-input";
import DemandDepositTable from "@/components/setup/demand-deposite-table";
import { ROUTES } from "@/utils/routes";

const DemandDepositSetup = () => {
  const { SETUP } = ROUTES;

  return (
    <Box>
      <div className="flex justify-between items-center p-4">
        <p className="text-[#64748B]">Demand deposit setup</p>
        <SearchInput className="rounded-[12px] w-[400px]" />

        <Link to={SETUP.DEMAND_DEPOSIT_SETUP.ADD}>
          <Button className="bg-[#4338CA]">
            Add New Demand Deposit Setup <Plus className="w-[20px] h-[20px]" />
          </Button>
        </Link>
      </div>
      <hr className="border-gray-200 mb-4" />
      <div class="flex flex-col p-4">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <DemandDepositTable />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 mb-4" />
      <Pagination />
    </Box>
  );
};

export default DemandDepositSetup;
