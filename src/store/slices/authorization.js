import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData, login, signOut } from './authorizationThunk';

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
      const { accessToken, status } = action.payload;
      state.loading = false;
      state.status = status;
      state.token = accessToken;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },
    [fetchUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      const { accessToken, user } = action.payload;
      state.loading = false;
      state.userData = user;
      state.token = accessToken;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
