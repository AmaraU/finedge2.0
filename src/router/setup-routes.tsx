import React from "react";

import ManageBanks from "@/pages/setup/manage-banks";
import { ROUTES } from "@/utils/routes";
import DemandDepositSetup from "@/pages/setup/demand-deposit-setup";

const { SETUP } = ROUTES;

export const setUpRoutes = [
  {
    path: SETUP.MANAGE_BANKS,
    element: <ManageBanks />,
  },
  {
    path: SETUP.DEMAND_DEPOSIT_SETUP,
    element: <DemandDepositSetup />,
  },
];
