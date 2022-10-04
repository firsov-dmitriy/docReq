import { loginSlice } from "./slice/loginSlice";
import { constructorApi } from "./service/constructorApi";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { docApi } from "./service/docApi";

export const store = configureStore({
  reducer: {
    [docApi.reducerPath]: docApi.reducer,
    [constructorApi.reducerPath]: constructorApi.reducer,
    login: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(docApi.middleware)
      .concat(constructorApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
