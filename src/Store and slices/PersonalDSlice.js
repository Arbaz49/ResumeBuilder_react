import { createSlice } from '@reduxjs/toolkit'

const initialState =[];

export const counterSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    push: (state,action) => {
        if(state.length===0){
            state.push(action.payload);

        }
    console.log(state,action);
    },
    getdata: (state) => {
       return state;
  },
}
})

// Action creators are generated for each case reducer function
export const { push,getdata} = counterSlice.actions

export default counterSlice.reducer