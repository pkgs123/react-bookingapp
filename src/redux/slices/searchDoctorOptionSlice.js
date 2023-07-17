import { createSlice } from "@reduxjs/toolkit";

 const searchDoctorOptionSlice = createSlice({
  name: "searchdoctor",
  initialState: {
    loading: false,
    selectedSearchOption:""
  },
  reducers: {
    setSearchDoctorOption:(state,action)=>{
        state.selectedSearchOption = action.payload
    }
  },
});

export const { setSearchDoctorOption} = searchDoctorOptionSlice.actions;
export default searchDoctorOptionSlice.reducer;