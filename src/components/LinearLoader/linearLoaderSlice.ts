import { createSlice } from '@reduxjs/toolkit';

interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

export const linearLoaderSlice = createSlice({
  name: 'linearLoader',
  initialState,
  reducers: {
    startLinearLoading: (state) => {
      state.loading = true;
    },
    finishLinearLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLinearLoading, finishLinearLoading } =
  linearLoaderSlice.actions;

export default linearLoaderSlice.reducer;
