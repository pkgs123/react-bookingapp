import {call,put,takeLatest} from "redux-saga/effects";
import { END_POINTS, REST_METHODS, callRestAPI } from "../../Services/ServiceConfig";
import { getDoctorsAppointmentDetailsSuccess, getDoctorsAppointmentErrorDetails } from "../../redux/slices/doctorsAppointmentSlice";


function* workerDoctorAppointmentDetails(action){
    const {payload} = action;
    const {getAppointmentSlotFilter} = payload
    let url = END_POINTS.SEARCH_BY_DOCTOR_APPOINTMENT_BY_ID;
    try{
        let response = yield call(callRestAPI,url,REST_METHODS.POST,payload)
        console.log("response--",response);
        getAppointmentSlotFilter(response.data)
        yield put(getDoctorsAppointmentDetailsSuccess(response.data));
    }
    catch(error){
        yield put(getDoctorsAppointmentErrorDetails(error.message));
    }
}

export default function* getDoctorsAppointmentDetailsSaga(){
    yield takeLatest("appointmentbookingcheck/getDoctorsAppointmentDetailsFetch",workerDoctorAppointmentDetails);
}