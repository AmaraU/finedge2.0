import { createSlice } from "@reduxjs/toolkit";

import { ReduxSlices } from "@/utils/constants";

export const initialMenuState = {
  allOpenedMenu: [],
  activeMenu: null,
};

export const menuSlice = createSlice({
  name: ReduxSlices.Menu,
  initialState: initialMenuState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    removeMenu: (state, action) => {
      state.allOpenedMenu = state.allOpenedMenu.filter(
        (menu) => menu.right !== action.payload.right
      );
    },
    addMenu: (state, action) => {
      if (
        !state.allOpenedMenu.some((menu) => menu.right === action.payload.right)
      ) {
        state.allOpenedMenu.push(action.payload);
      }
    },
  },
});

export const {  setActiveMenu, removeMenu, addMenu } =
  menuSlice.actions;

export default menuSlice.reducer;
