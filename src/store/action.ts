import { createAsyncAction } from "typesafe-actions";

export const loginAction = createAsyncAction(
  "authenticate/LOGIN",
  "authenticate/LOGIN_SUCCESS",
  "authenticate/LOGIN_FAIL"
)<void, void, void>();

export const logoutAction = createAsyncAction(
  "authenticate/LOG_OUT",
  "authenticate/LOG_OUT_SUCCESS",
  "authenticate/LOG_OUT_FAIL"
)<void, void, void>();
