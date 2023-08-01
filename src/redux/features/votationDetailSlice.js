import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  status: "loading",
  error: null,
};

export const votationDetailSlice = createSlice({
  name: "votationDetail",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.status = "succeded";
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, setStatus, setError } = votationDetailSlice.actions;

export default votationDetailSlice.reducer;
