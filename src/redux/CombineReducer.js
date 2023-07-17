import { combineReducers } from "@reduxjs/toolkit";
import alertsSliceReducer  from "./slices/alertsSlice";
import userSliceReducer from "./slices/userSlice";
import loginReducer from "./slices/loginSlice";
import searchOptionReducer from "./slices/searchDoctorOptionSlice";
import SearchApiReducer from "./slices/SearchApiState";
import LocationListReducer from "./slices/locationListSlice";
import searchDoctorsListReducer from "./slices/searchDoctorsListSlice";
import doctorsAppointmentReducer from "./slices/doctorsAppointmentSlice";
export const combineReducer = combineReducers({
  alerts: alertsSliceReducer,
  user : userSliceReducer,
  loginDetails:loginReducer,
  searchDoctorOptionDetails:searchOptionReducer,
  searchAPIDetails:SearchApiReducer,
  loactionListDetails:LocationListReducer,
  searchDoctorsListDetails:searchDoctorsListReducer,
  doctorsAppointmentDetails:doctorsAppointmentReducer
});