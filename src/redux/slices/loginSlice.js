import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    isLoading:false,
    loginFailedMessage:{}
  },
  reducers: {
    getLoginFetch:(state)=>{
      state.isLoading = false;
    },
    getLoginSuccess: (state , action) => {
      state.user = action.payload;
    },
    getLoginFailure:(state,action)=>{
        state.loginFailedMessage = action.payload;
    }
  },
});

export const { getLoginFetch , getLoginSuccess, getLoginFailure } = loginSlice.actions;
export default loginSlice.reducer;