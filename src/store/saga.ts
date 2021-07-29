import { put, delay, takeLatest } from "@redux-saga/core/effects";

import { loginAction, logoutAction } from "./action";

function* handleLogin() {
  try {
    yield delay(3000);
    const token = "123456";
    localStorage.setItem("TOKEN", token);
    yield put(loginAction.success());
  } catch (e) {
    yield put(loginAction.failure());
  }
}

function* handleLogout() {
  try {
    yield delay(3000);
    localStorage.removeItem("TOKEN");
    yield put(logoutAction.success());
  } catch (e) {
    yield put(logoutAction.failure());
  }
}

export default function* rootSaga() {
  yield takeLatest(loginAction.request, handleLogin);
  yield takeLatest(logoutAction.request, handleLogout);
}
