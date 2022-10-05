import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConstructor } from "../../Types";

interface loginState {
  user: string | null;

  token?: string;
}
const initialState: loginState = {
  user: localStorage.getItem("user"),
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      localStorage.setItem("user", action.payload);
      state.user = action.payload;
    },
    loginOut(state) {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { login, loginOut } = loginSlice.actions;
