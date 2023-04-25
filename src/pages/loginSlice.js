import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
    token: "",
  },
  reducers: {
    changeStateIsLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },
    addToken: (state, action) => {
      state.token = action.payload.token;
    },
    resetToken: (state) => {
      state.token = "";
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeStateIsLogin, addToken, resetToken } = loginSlice.actions;
export const selectIsLogin = (state) => state.login.isLogin;
export const selectToken = (state) => state.login.token;
export const loginReducer = loginSlice.reducer;