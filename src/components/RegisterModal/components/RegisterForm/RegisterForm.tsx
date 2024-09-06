import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { openSnackbar } from 'components/PositionedSnackbar/snackbarSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type RegisterFormProps = {
  //   register: any;
  //   formState: any;
  //   checkFormData: any;
  handleNextStep: () => void;
  formProps: any;
};

const RegisterForm = ({ handleNextStep, formProps }: RegisterFormProps) => {
  const { register, getValues, setFocus, checkEmailInUse } = formProps;

  const dispatch = useAppDispatch();

  const handleNextStepClick = () => {
    const emptyEmail = getValues().email === '';
    const emptyPassword = getValues().password === '';
    const emptyPasswordConfirmation = getValues().passwordConfirmation === '';

    const password = getValues().password;
    const passwordConfirmation = getValues().passwordConfirmation;
    const passwordsMatches = password === passwordConfirmation;

    if (emptyEmail) {
      setFocus('email');
      return;
    }

    if (emptyPassword) {
      setFocus('password');
      return;
    }

    if (emptyPasswordConfirmation) {
      setFocus('passwordConfirmation');
      return;
    }

    if (!passwordsMatches) {
      dispatch(openSnackbar('As senhas devem ser iguais.'));
      return;
    }

    checkEmailInUse(getValues(), handleNextStep);

    // handleNextStep();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <TextField
        id='email'
        type='email'
        label='Email'
        fullWidth
        {...register('email', { required: true })}
      />
      <TextField
        id='password'
        type='password'
        label='Senha'
        fullWidth
        {...register('password', { required: true })}
      />
      <TextField
        id='passwordConfirmation'
        type='password'
        label='Confirme a senha'
        fullWidth
        {...register('passwordConfirmation', { required: true })}
      />

      <Box display='flex' justifyContent='center' mt={2}>
        <IconButton
          sx={{ color: '#fff', border: '1px solid #ffffff30' }}
          size='large'
          onClick={handleNextStepClick}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>

      {/* <Box className='RegisterModal-actions'>
        <Button
          variant='contained'
          type='submit'
          size='large'
          autoFocus
          className='RegisterModal-register-button'
        >
          Registrar
        </Button>
      </Box> */}
    </Box>
  );
};

export default RegisterForm;
