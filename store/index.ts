import { configureStore } from '@reduxjs/toolkit';
import authStateReducer from 'store/authStateSlice';
import deviceTypeReducer from 'store/deviceTypeSlice';
import noScrollSlice from 'store/noScrollSlice';

const store = configureStore({
  reducer: {
    authState: authStateReducer,
    isMobile: deviceTypeReducer,
    noScroll: noScrollSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
