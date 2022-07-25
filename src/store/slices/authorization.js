import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserData,
  updateUserData,
  login,
  signOut,
} from './authorizationThunk';

const initialState = {
  token: null,
  loading: false,
  userData: {},
  status: null,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: {
    [signOut.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      const { body, status } = action.payload;
      console.log(action);
      state.loading = false;
      state.status = action.payload ? status : 400;
      state.token = body.token;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.status = null;
    },
    [fetchUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      const { accessToken, body } = action.payload;
      state.loading = false;
      state.userData = body;
      state.token = accessToken;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    [updateUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUserData.fulfilled]: (state, action) => {
      const { body } = action.payload;
      console.log(body);
      state.loading = false;
      state.userData.firstName = body.firstName;
      state.userData.lastName = body.lastName;
      //state.token = accessToken;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
