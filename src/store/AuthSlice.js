import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    isLoggedIn: (loginState) => loginState.loggedIn,

    setLogin: (loginState, action) => {
      loginState.loggedIn = action.payload;
    },
    setLoggedOut: (loginState, action) => {
      loginState.loggedIn = false;
    },
  },
});

export const { isLoggedIn, setLogin, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;
