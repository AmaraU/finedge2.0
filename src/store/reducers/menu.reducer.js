import { createSlice } from "@reduxjs/toolkit";

import { ReduxSlices } from "@/utils/constants";

export const initialMenuState = {
  allOpenedMenu: [],
  activeMenu: null,
};

export const menuSlice = createSlice({
  name: ReduxSlices.menu,
  initialState: initialMenuState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    removeMenu: (state, action) => {
      state.allOpenedMenu = state.allOpenedMenu.filter(
        (menu) => menu !== action.payload
      );
    },
    addMenu: (state, action) => {
      if (!state.allOpenedMenu.includes(action.payload)) {
        state.allOpenedMenu.push(action.payload);
      }
    },
  },
});

export const { setAllOpenedMenu, setActiveMenu, removeMenu, addMenu } =
  menuSlice.actions;

export default menuSlice.reducer;
