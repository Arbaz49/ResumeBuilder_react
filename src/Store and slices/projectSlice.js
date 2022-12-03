import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    pushproject: (state, action) => {
      state.push(action.payload);

      console.log(state, action);
    },
    getproject: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushproject, getproject } = projectSlice.actions;

export default projectSlice.reducer;
