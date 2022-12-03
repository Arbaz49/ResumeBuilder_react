import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const interestSlice = createSlice({
  name: "interest",
  initialState,
  reducers: {
    pushinterest: (state, action) => {
      state.push(action.payload);

      console.log(state, action);
    },
    getinterest: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushinterest, getinterest } = interestSlice.actions;

export default interestSlice.reducer;
