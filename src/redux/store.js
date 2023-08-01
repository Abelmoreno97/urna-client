import { configureStore } from "@reduxjs/toolkit";
import votationsReducer from "./features/votationsSlice";
import votationDetailReducer from "./features/votationDetailSlice";

export const store = configureStore({
  reducer: {
    votations: votationsReducer,
    votationDetail: votationDetailReducer,
  },
});
