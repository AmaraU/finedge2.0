import { createSlice } from "@reduxjs/toolkit";

import { ReduxSlices } from "@/utils/constants";

export const initialUserState = {
  isLoggedIn: false,
  email: "",
};

export const userSlice = createSlice({
  name: ReduxSlices.User,
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
