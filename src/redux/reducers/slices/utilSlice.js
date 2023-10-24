import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  dataFake: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
};

export const utilSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    //action user
    setData: (state, action) => {
      state.dataFake = action.payload;
    },
  },
});

export const {getUserFetch, getUserSuccess, getUserFail} = utilSlice.actions;

export default utilSlice.reducer;
