import { configureStore } from "@reduxjs/toolkit";
import orgSlice from '../store/slices/orgSlice';

const store = configureStore({
  reducer: {
    org: orgSlice
  },
});

export default store;
