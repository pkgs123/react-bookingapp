import { createSlice } from "@reduxjs/toolkit";

const doctorsAppointmentSlice = createSlice({
    name:"appointmentbookingcheck",
    initialState:{isLoading:false,appointmentDetails:{},appointmentErrorDetails:{}},
    reducers:{
        getDoctorsAppointmentDetailsFetch:(state)=>{
            state.isLoading = true;
        },
        getDoctorsAppointmentDetailsSuccess:(state,action)=>{
            state.isLoading = false;
            state.appointmentDetails = action.payload;
        },
        getDoctorsAppointmentErrorDetails:(state,action)=>{
            state.isLoading = false;
            state.appointmentErrorDetails = action.payload;
        }
    }
})
export const {getDoctorsAppointmentDetailsFetch,getDoctorsAppointmentDetailsSuccess,getDoctorsAppointmentErrorDetails} = doctorsAppointmentSlice.actions;
export default doctorsAppointmentSlice.reducer;