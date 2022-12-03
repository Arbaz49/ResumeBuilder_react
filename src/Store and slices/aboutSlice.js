import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    pushabout: (state, action) => {
      state.push(action.payload);

      console.log(state, action);
    },
    getabout: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushabout, getabout } = aboutSlice.actions;

export default aboutSlice.reducer;
