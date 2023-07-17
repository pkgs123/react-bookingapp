import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading:false
  },
  reducers: {
    getUser:(state)=>{
      state.isLoading = false;
    },
    setUser: (state , action) => {
      state.user = action.payload;
    }
  },
});

export const { setUser , reloadUserData } = userSlice.actions;
export default userSlice.reducer;