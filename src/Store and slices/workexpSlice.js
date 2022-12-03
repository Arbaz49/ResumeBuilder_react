import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    pushwork: (state, action) => {
      state.push(action.payload);

      console.log(state, action);
    },
    getwork: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushwork, getwork } = workSlice.actions;

export default workSlice.reducer;
