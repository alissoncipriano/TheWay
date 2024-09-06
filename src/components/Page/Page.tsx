import { PageProps } from './types';

import { Box } from '@mui/material';

import { theme } from 'theme/theme';

const Page = ({ children, boxProps }: PageProps) => {
  return (
    <Box
      width='100%'
      minHeight='calc(100vh - 60px)'
      bgcolor={theme.palette.primary.dark}
      padding={11}
      boxSizing='border-box'
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default Page;
