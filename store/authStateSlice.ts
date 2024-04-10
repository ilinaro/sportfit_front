import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  isLogin: boolean | undefined;
} = {
  isLogin: undefined,
};

const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    toggleAuthState(
      state,
      action: {
        payload: {
          isLogin: boolean | undefined;
        };
      }
    ) {
      state.isLogin = action.payload.isLogin;
    },
  },
});

export default authStateSlice.reducer;
export const { toggleAuthState } = authStateSlice.actions;
