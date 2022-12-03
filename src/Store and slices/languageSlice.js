import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    pushlanguage: (state, action) => {
      state.push(action.payload);

      console.log(state, action);
    },
    getlanguage: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushlanguage, getlanguage } = languageSlice.actions;

export default languageSlice.reducer;
