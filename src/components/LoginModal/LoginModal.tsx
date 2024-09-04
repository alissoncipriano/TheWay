import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

import { StyledLoginModal } from './LoginModal.styles';

export type LoginInputs = {
  email: string;
  password: string;
};

type LoginModalProps = {
  open: boolean;
  handleClose: () => void;
  onLogin: (data: LoginInputs) => void;
};

const LoginModal = ({ open, handleClose, onLogin }: LoginModalProps) => {
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => onLogin(data);

  return (
    <StyledLoginModal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: {
          backgroundColor: '#161724d5',
        },
      }}
      maxWidth='xs'
      fullWidth
    >
      <DialogTitle className='LoginModal-title'>Login</DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent className='LoginModal-content'>
          <IconButton onClick={handleClose} className='LoginModal-close-button'>
            <CloseIcon />
          </IconButton>

          <TextField
            id='email'
            type='email'
            label='Email'
            {...register('email', { required: true })}
          />
          <TextField
            id='password'
            type='password'
            label='Senha'
            {...register('password', { required: true })}
          />
        </DialogContent>

        <DialogActions>
          <Button
            variant='contained'
            type='submit'
            autoFocus
            className='LoginModal-login-button'
          >
            Entrar
          </Button>
        </DialogActions>
      </form>
    </StyledLoginModal>
  );
};

export default LoginModal;
