import { PageProps } from './types';

import { Box } from '@mui/material';

const Page = ({ children, boxProps }: PageProps) => {
  return (
    <Box width='100%' minHeight='calc(100vh - 60px)' {...boxProps}>
      {children}
    </Box>
  );
};

export default Page;
