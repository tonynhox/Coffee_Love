import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice' 

const rootReducer = combineReducers({
  users: userSlice,
});

export const appReducer = (state, action) => {
  if(action.type === 'logout') {
    const slices = getState();  
    //reset
    Object.keys(slices).forEach(slice => {
      slices[slice] = slices[slice].initialState; 
    })

    return slices;  
  }

  return rootReducer(state, action);
}


export default rootReducer;
