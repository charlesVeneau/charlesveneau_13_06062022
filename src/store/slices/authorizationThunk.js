import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { getToken, setToken, removeToken } from '../../utils/HelperFunctions';
import axios from 'axios';

export const login = createAsyncThunk(
  'authorization/login',
  async (credentials) => {
    const { email, password } = credentials;
    try {
      const response = await axios({
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        url: 'http://localhost:3001/api/v1/user/login',
        data: {
          email: email,
          password: password,
        },
      });
      setToken(response.data.body.token);
      return response.data;
    } catch (err) {
      removeToken();
      return isRejectedWithValue(400);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'authorization/fetchUserData',
  async () => {
    try {
      const accessToken = getToken();
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/api/v1/user/profile',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return { ...response.data, accessToken };
    } catch (err) {
      removeToken();
      return isRejectedWithValue(400);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'authorization/updateUserData',
  async (identity) => {
    const { firstName, lastName } = identity;
    try {
      const accessToken = getToken();
      const response = await axios({
        method: 'put',
        url: 'http://localhost:3001/api/v1/user/profile',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          firstName: firstName,
          lastName: lastName,
        },
      });
      return { ...response.data };
    } catch (err) {
      removeToken();
      return isRejectedWithValue(400);
    }
  }
);

export const signOut = createAsyncThunk('authorization/signOut', async () => {
  removeToken();
});
