import { fork, all } from "redux-saga/effects";
import getLoginSaga from "./workers/loginSaga";
import getLocationSaga from "./workers/locationListSaga";
import getSearchDoctorsListSaga from "./workers/searchDoctorsListSaga";
import getDoctorsAppointmentDetailsSaga from "./workers/doctorsAppointmentSaga";

function* rootSaga() {
  yield all([
    fork(getLoginSaga),
    fork(getLocationSaga),
    fork(getSearchDoctorsListSaga),
    fork(getDoctorsAppointmentDetailsSaga)
  ]);
}
export default rootSaga;
