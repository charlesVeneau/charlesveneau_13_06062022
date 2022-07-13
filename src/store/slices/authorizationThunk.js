import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { getToken, setToken, removeToken } from '../../utils/HelperFunctions';
import history from '../../utils/history';
import axios from 'axios';

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
      return isRejectedWithValue('');
    }
  }
);

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
      console.log(response.data);
      setToken(response.data.body.token);
      history.push('/dashboard');
      return response.data;
    } catch (err) {
      console.log(err);
      removeToken();
      return isRejectedWithValue('');
    }
  }
);

export const signOut = createAsyncThunk('authorization/signOut', async () => {
  removeToken();
});
