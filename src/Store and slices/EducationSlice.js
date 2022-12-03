import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    pusheducation: (state, action) => {
      state.push(action.payload);

      console.log(state, action);
    },
    geteducation: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pusheducation, geteducation } = educationSlice.actions;

export default educationSlice.reducer;
