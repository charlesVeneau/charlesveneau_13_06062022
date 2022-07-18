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
      console.log(action);
      state.loading = false;
      state.status = action.payload ? status : 400;
      state.token = accessToken;
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
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
