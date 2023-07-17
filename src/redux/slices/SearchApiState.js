import { createSlice } from "@reduxjs/toolkit";

export const searchApiSlice = createSlice({
  name: "search",
  initialState: {
    searchList: [],
    selectedSearchData:{},
    isLoading: false,
  },
  reducers: {
    getSearchApiFetch: (state,action) => {
      state.isLoading = true;
    },
    getSearchApiSuccess: (state, action) => {
      state.searchList = action.payload;
      state.isLoading = false;
    },
    getSearchByIdSuccess:(state,action)=>{
      state.selectedSearchData = action.payload;
      state.isLoading = false;
    },
    getSearchApiFailure: (state) => {
      state.isLoading = false;
    },
  },
});
export const {
  getSearchApiFetch,
  getSearchApiSuccess,
  getSearchByIdSuccess,
  getSearchApiFailure,
} = searchApiSlice.actions;
export default searchApiSlice.reducer;
