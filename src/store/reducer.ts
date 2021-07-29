import { createReducer } from "typesafe-actions";
import { ActionType } from "typesafe-actions";

import { loginAction, logoutAction } from "./action";

export interface StoreState {
  token: string;
}

const INITIAL_STATE: StoreState = {
  token: "",
};

const rootReducer = createReducer<
  StoreState,
  ActionType<typeof import("../store/action")>
>(INITIAL_STATE)
  .handleAction(loginAction.request, (state) => {
    return { ...state };
  })
  .handleAction(loginAction.success, (state) => {
    return { ...state, token: "123456" };
  })
  .handleAction(loginAction.failure, (state) => {
    return { ...state, token: "" };
  })
  .handleAction(logoutAction.request, (state) => {
    return { ...state };
  })
  .handleAction(logoutAction.success, (state) => {
    return { ...state, token: "" };
  })
  .handleAction(logoutAction.failure, (state) => {
    return { ...state };
  });

export default rootReducer;
