import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
};

export const UserSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user=action.payload;

      console.log( action);
    },
    getuser: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getuser, setuser } = UserSlice.actions;

export default UserSlice.reducer;
