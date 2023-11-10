import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  photoPath: null,
};

const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    getChangeCameraVisible: (state, action) => {
      state.isVisible = action.payload;
    },
    getSetPhotoPath: (state, action) => {
      state.photoPath = action.payload;
      state.isVisible = false;
    },
  },
});

export const {getChangeCameraVisible, getSetPhotoPath} = cameraSlice.actions;

export default cameraSlice.reducer;
