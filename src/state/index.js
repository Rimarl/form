import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  pdv: null,
  token: null,
  
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
    setLogin: (state, action) => {
      state.pdv = action.payload.pdv;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.pdv = null;
      state.token = null;
    },
   
  },
});

export const {  setLogin, setLogout} =
  authSlice.actions;
export default authSlice.reducer;

