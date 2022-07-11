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
        url: 'localhost:3001/api/v1/user/profile',
        headers: {
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

export const login = (currentUser) => {
  createAsyncThunk('authorization/login', async (payload) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'localhost:3001/api/v1/user/login',
        data: {
          username: currentUser.username,
          password: currentUser.password,
        },
      });
      setToken(response.data.body.token);
      history.push('/dashboard');
      return response.data;
    } catch (err) {
      removeToken();
      return isRejectedWithValue('');
    }
  });
};

export const signOut = createAsyncThunk('authorization/signOut', async () => {
  removeToken();
});
