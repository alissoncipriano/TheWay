import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';

import RegisterForm from '../RegisterForm';
import ProfileForm from '../ProfileForm';

const RegisterStepper = (formProps: any) => {
  const [activeStep, setActiveStep] = useState(0);

  const containerRef = useRef<HTMLElement>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const showFirstStep = activeStep === 0;
  const showSecondStep = activeStep === 1;

  const steps = [
    {
      label: 'Dados de registro',
      component: (
        <RegisterForm handleNextStep={handleNext} formProps={formProps} />
      ),
    },
    {
      label: 'Perfil',
      component: (
        <ProfileForm handleBackStep={handleBack} formProps={formProps} />
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', position: 'relative' }} ref={containerRef}>
      <Slide
        in={activeStep === 0}
        container={containerRef.current}
        direction='right'
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            transition: 'all 0.5s ease-in-out!important',
            opacity: showFirstStep ? 1 : 0,
          }}
        >
          {steps[0].component}
        </Box>
      </Slide>

      <Slide
        in={activeStep === 1}
        container={containerRef.current}
        direction='left'
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            transition: 'all 0.5s ease-in-out!important',
            opacity: showSecondStep ? 1 : 0,
          }}
        >
          {steps[1].component}
        </Box>
      </Slide>
    </Box>
  );
};

export default RegisterStepper;
