import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

export const appSlice = createSlice({
  name:"appSlice",
  initialState:{
    open:false
  },
  reducers:{
    setOpen:(state, action)=>{
      state.open = action.payload;
    }
  }

}) ;
export const {setOpen}= appSlice.actions;

export default appSlice.reducer;
