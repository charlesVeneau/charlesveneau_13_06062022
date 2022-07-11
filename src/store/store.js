import { configureStore } from '@reduxjs/toolkit';
import authorization from './slices/authorization';

const store = configureStore({
  reducer: {
    authorization: authorization,
  },
});

export default store;
