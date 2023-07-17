import { createSlice } from "@reduxjs/toolkit";

const ClearStateSlice = createSlice({
  name: "clearstate",
  initialState: {},
  reducers: {
    emptyStateInfo: () => {},
  },
});
export const { emptyStateInfo } = ClearStateSlice.actions;
export default ClearStateSlice.reducer;
