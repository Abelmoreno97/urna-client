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
    voteAddLike(state, action) {
      const { vote_id, user_id } = action.payload;
      state.data.votes = state.data.votes?.map((vote) => {
        if (vote._id === vote_id) {
          vote.likes = [...vote.likes, user_id];
        }
        return vote;
      });
    },
    voteRemoveLike(state, action) {
      const { vote_id, user_id } = action.payload;
      state.data.votes = state.data.votes?.map((vote) => {
        if (vote._id === vote_id) {
          vote.likes = vote.likes.filter((like) => like !== user_id);
        }
        return vote;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, setStatus, setError, voteAddLike, voteRemoveLike } =
  votationDetailSlice.actions;

export default votationDetailSlice.reducer;
