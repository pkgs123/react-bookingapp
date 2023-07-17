import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name:"locatonlist",
    initialState:{isLoading:false,locationList:[],locationListErrorDetails:{}},
    reducers:{
        getLocationFetch:(state)=>{
            state.isLoading = true;
        },
        getLocationSuccess:(state,action)=>{
            state.locationList = action.payload;
        },
        getLocationListError:(state,action)=>{
            state.locationListErrorDetails = action.payload;
        }
    }
})
export const {getLocationFetch,getLocationSuccess,getLocationListError} = locationSlice.actions;
export default locationSlice.reducer;