import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignin: false,
    user: {
      displayName: "",
      photoUrl: "",
    },
  },
  reducers: {
    signIn: (state) => {
      state.isSignin = true;
    },
    signOutUser: (state) => {
      state.isSignin = false;
    },
    setUser: (state, action) => {
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { signIn, signOutUser, setUser } = userSlice.actions;
export default userSlice.reducer;
