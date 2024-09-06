import { SubmitHandler, useForm } from 'react-hook-form';

import Logo from 'assets/images/logo.png';
import Background from 'assets/images/register_background.jpg';

import { StyledRegisterModal } from './RegisterModal.styles';

import RegisterStepper from './components/RegisterStepper/RegisterStepper';

import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

import { RegisterInputs, RegisterModalProps } from './types';

const RegisterModal = ({
  handleClose,
  onRegister,
  checkEmailInUse,
  open,
}: RegisterModalProps) => {
  const { register, handleSubmit, formState, getValues, setFocus } =
    useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => onRegister(data);

  return (
    <StyledRegisterModal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: {
          backgroundColor: '#161724d5',
        },
      }}
      maxWidth='md'
      fullWidth
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent className='RegisterModal-content'>
          <Box className='RegisterModal-background'>
            <img src={Background} alt='Register background image' />
          </Box>

          <IconButton
            onClick={handleClose}
            className='RegisterModal-close-button'
          >
            <CloseIcon />
          </IconButton>

          <Box className='RegisterModal-stepper'>
            <img src={Logo} width={100} alt='Logo' />

            <RegisterStepper
              register={register}
              formState={formState}
              getValues={getValues}
              setFocus={setFocus}
              onSubmit={handleSubmit(onSubmit)}
              checkEmailInUse={checkEmailInUse}
            />
          </Box>
        </DialogContent>
      </form>
    </StyledRegisterModal>
  );
};

export default RegisterModal;
