import axios from "axios";
import { setupInterceptorsTo } from "./AxiosConfiguration";

const runLocally = () =>
  window.location.hostname &&
  /^localhost$/.test(window.location.hostname);
const HOST_URL = runLocally()
  ? ""
  : `//atulvm.eastus.cloudapp.azure.com:8000/`;
const USER_URL = HOST_URL + "api/user/";
const DOCTOR_URL = HOST_URL + "api/doctor/";

export const REST_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
};

export const END_POINTS = {
  //token
  LOGIN_API: `${USER_URL}login`,
  REGISTER_API: `${USER_URL}register`,
  //Location Details
  LOCATION_API: `${USER_URL}get-location`,
  //Search Location
  SEARCH_DOCTOR_API: `${DOCTOR_URL}search-doctor`,
  SEARCH_BY_SPECIALIZATION: `${DOCTOR_URL}search-doctor-by-specialization`,
  // Search Doctor by doctor's appointment list
  SEARCH_BY_DOCTOR_APPOINTMENT_BY_ID: `${DOCTOR_URL}get-doctors-availability-by-id`,
  GET_DOCTORS_INFO: `${DOCTOR_URL}get-doctor-info-by-id`,
  CHECK_BOOKING_AVAILABILITY: `${USER_URL}check-booking-avilability`,
  BOOK_APPOINTMENT: `${USER_URL}book-appointment`,
  GET_APPOINTMENTS_BY_ID: `${USER_URL}get-appointments-by-user-id`,
  GET_USER_INFO_BY_ID:`${USER_URL}get-user-info-by-id`
};

//interceptors to the global instance
setupInterceptorsTo(axios);

export function callRestAPI(url, method, payload) {
  switch (method) {
  case REST_METHODS.GET:
    return axios.get(url);
  case REST_METHODS.POST:
    return axios.post(url, payload);
  case REST_METHODS.PUT:
    return axios.put(url, payload);
  default:
    return axios.delete(url, payload);
  }
}
