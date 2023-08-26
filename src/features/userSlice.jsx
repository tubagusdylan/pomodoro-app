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
    signOut: (state) => {
      state.isSignin = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
