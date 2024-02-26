import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewHistory: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    STORE_REVIEWS(state, action) {
      state.reviewHistory = action.payload;
    },
  },
});

export const { STORE_REVIEWS } = reviewSlice.actions;

export const selectReviewHistory = (state) => state.reviews.reviewHistory;

export default reviewSlice.reducer;
