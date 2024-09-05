
import {configureStore} from '@reduxjs/toolkit'
import appReducer from './appSlice';
const store = configureStore({
  reducer:{
        // eslint-disable-next-line no-undef
        appSlice:appReducer
  }
});

export default store;