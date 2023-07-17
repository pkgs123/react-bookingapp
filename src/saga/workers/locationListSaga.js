import {call,put,takeLatest} from "redux-saga/effects";
import {
    callRestAPI,
    REST_METHODS,
    END_POINTS,
  } from "../../Services/ServiceConfig";
import {getLocationSuccess,getLocationListError} from "../../redux/slices/locationListSlice";


function* workerLocationSaga(){
    let url = END_POINTS.LOCATION_API;
    try{
        let response = yield call(callRestAPI,url,REST_METHODS.GET)
        console.log("response",response);
        yield put(getLocationSuccess(response.data));
    }
    catch(error){
        console.log("error",error);
        yield put(getLocationListError(error));
    }
}

export default function* getLocationSaga(){
    yield takeLatest("locatonlist/getLocationFetch",workerLocationSaga)
}