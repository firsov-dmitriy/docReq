import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  fullName: string | null;
  token?: string;
}
const initialState: loginState = {
  fullName: localStorage.getItem("user"),
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      localStorage.setItem("user", action.payload);
      state.fullName = action.payload;
    },
    loginOut(state) {
      localStorage.removeItem("user");
      state.fullName = null;
    },
  },
});

export const { login, loginOut } = loginSlice.actions;
