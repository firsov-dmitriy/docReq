import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  id: number;
  fullName: string;
  token?: string;
}
const initialState: loginState = {
  id: 0,
  fullName: "",
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login(_, action: PayloadAction<string>) {
      localStorage.setItem("user", action.payload);
    },
    loginOut(_) {
      localStorage.removeItem("user");
    },
  },
});

export const { login, loginOut } = loginSlice.actions;
