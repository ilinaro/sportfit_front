import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  noScroll: boolean;
} = {
  noScroll: false,
};

const noScrollSlce = createSlice({
  name: 'isMobile',
  initialState,
  reducers: {
    toggleScroll(
      state,
      action: {
        payload: {
          noScroll: boolean;
        };
      }
    ) {
      state.noScroll = action.payload.noScroll;
    },
  },
});

export default noScrollSlce.reducer;
export const { toggleScroll } = noScrollSlce.actions;
