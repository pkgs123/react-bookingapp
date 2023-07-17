import { call, put, takeLatest } from "redux-saga/effects";
import {getLoginSuccess,getLoginFailure} from "../../redux/slices/loginSlice";
import {
  callRestAPI,
  REST_METHODS,
  END_POINTS,
} from "../../Services/ServiceConfig";

function* workerLoginSaga(action) {
  let url = END_POINTS.LOGIN_API;
  let {payload} = action;
  let {getLoginResponse} = payload;
  try {
    let response = yield call(
      callRestAPI,
      url,
      REST_METHODS.POST,
      action.payload
    );
    yield put(getLoginSuccess(response.data));
    console.log("response.data",response.data);
    getLoginResponse(response.data);
  } catch (error) {
    yield put(getLoginFailure(error));
  }
}
export default function* getLoginSaga() {
  yield takeLatest(
    "login/getLoginFetch",
    workerLoginSaga
  );
}
