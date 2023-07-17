import { createSlice } from "@reduxjs/toolkit";

const searchDoctorsSlice = createSlice({
  name: "searchdoctorslist",
  initialState: {
    isLoading: false,
    searchDoctorsList: [],
    searchDoctorsBySpecialization: [],
    searchDoctorsListErrorDetails: {},
    selectedDoctor:{}
  },
  reducers: {
    getSearchDoctorsFetch: (state) => {
      state.isLoading = true;
    },
    getSearchDoctorsBySpecializationFetch:(state,action)=>{
      state.isLoading = true;
    },
    getSearchDoctorsSuccess: (state, action) => {
      state.isLoading = false;
      state.searchDoctorsList = action.payload;
    },
    getSearchDoctorsBySpecialization: (state, action) => {
      state.isLoading = false;
      state.searchDoctorsBySpecialization = action.payload;
    },
    getSelectedValue: (state, action) => {
      state.selectedDoctor = action.payload;
    },
    getSearchDoctorsError: (state, action) => {
      state.isLoading = false;
      state.searchDoctorsListErrorDetails = action.payload;
    },
  },
});

export const {
  getSearchDoctorsFetch,
  getSearchDoctorsBySpecializationFetch,
  getSearchDoctorsSuccess,
  getSearchDoctorsBySpecialization,
  getSelectedValue,
  getSearchDoctorsError,
} = searchDoctorsSlice.actions;
export default searchDoctorsSlice.reducer;
