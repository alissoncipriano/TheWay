import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { RegisterInputs } from 'components/RegisterModal/types';

type ProfileFormProps = {
  formProps: any;
  handleBackStep: () => void;
};

const ProfileForm = ({ formProps, handleBackStep }: ProfileFormProps) => {
  const { register, getValues, setFocus, onSubmit } = formProps;

  const handleRegister = (data: RegisterInputs) => {
    const emptyName = getValues().name === '';

    if (emptyName) {
      setFocus('name');
      return;
    }

    onSubmit(data);
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
        type='text'
        label='Nome'
        fullWidth
        {...register('name', { required: true })}
      />

      <Button
        variant='contained'
        type='submit'
        size='large'
        fullWidth
        autoFocus
        sx={{ '&:hover': { backgroundColor: '#ffffff21' } }}
        onClick={handleRegister as any}
      >
        Registrar
      </Button>

      <Box display='flex' justifyContent='center'>
        <IconButton
          sx={{ color: '#fff', border: '1px solid #9999992f' }}
          size='large'
          onClick={handleBackStep}
        >
          <NavigateBeforeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProfileForm;
