import {call,put,takeLatest} from "redux-saga/effects";
import { callRestAPI,END_POINTS,REST_METHODS } from "../../Services/ServiceConfig";
import {getSearchDoctorsSuccess, getSearchDoctorsBySpecialization,getSearchDoctorsError} from "../../redux/slices/searchDoctorsListSlice";

function* workerSearchDoctorsListSaga(action){
    console.log("action",action);
    const {payload} = action;
    const {optionText,text,locationName} =payload;
    const {getSearchDoctorsResponse} = payload;

    let url = ''
    if(optionText.toLowerCase()==="name"){
        url =  `${END_POINTS.SEARCH_DOCTOR_API}?name=${text.toLowerCase()}&location=${locationName}`;
    }
    else{
        url =  `${END_POINTS.SEARCH_BY_SPECIALIZATION}?specialization=${text.toLowerCase()}&location=${locationName}`;
    }

    try{
        let response = yield call(callRestAPI,url,REST_METHODS.POST);
        if(optionText.toLowerCase()==="name"){
            yield put(getSearchDoctorsSuccess(response.data));
        }
        else{
            yield put(getSearchDoctorsBySpecialization(response.data));
        }
       
        getSearchDoctorsResponse(response.data);
    }
    catch(error){
        yield put(getSearchDoctorsError(error));
    }
}

export default function* getSearchDoctorsListSaga(){
    yield takeLatest("searchdoctorslist/getSearchDoctorsFetch",workerSearchDoctorsListSaga);
}