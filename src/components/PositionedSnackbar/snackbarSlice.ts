import { createSlice } from '@reduxjs/toolkit';
import { SnackbarOrigin } from '@mui/material';

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
}

const initialState: State = {
  open: false,
  vertical: 'top',
  horizontal: 'center',
  message: '',
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    closeSnackbar: (state) => {
      state.open = false;
    },
    openSnackbar: (state, action) => {
      state.message = action.payload;
      state.open = true;
    },
  },
});

export const { closeSnackbar, openSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
