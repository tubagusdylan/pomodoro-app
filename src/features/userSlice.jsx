import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignin: false,
  },
  reducers: {
    signIn: (state) => {
      state.isSignin = true;
    },
    signOutUser: (state) => {
      state.isSignin = false;
    },
  },
});

export const { signIn, signOutUser } = userSlice.actions;
export default userSlice.reducer;
