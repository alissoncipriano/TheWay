import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { closeSnackbar } from './snackbarSlice';

const PositionedSnackbar = () => {
  const open = useAppSelector((state) => state.snackbar.open);
  const message = useAppSelector((state) => state.snackbar.message);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        message={message}
        autoHideDuration={5000}
        key={message}
      />
    </Box>
  );
};

export default PositionedSnackbar;
