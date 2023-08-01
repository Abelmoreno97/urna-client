import { createSlice } from "@reduxjs/toolkit";
import Votation from "../../repositories/Votation";

const initialState = {
  data: [],
  status: "loading",
  error: null,
};

export const votationsSlice = createSlice({
  name: "votations",
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
export const { setData, setStatus, setError } = votationsSlice.actions;

export default votationsSlice.reducer;
