import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import { useAppSelector } from 'store/hooks';

import { theme } from 'theme/theme';

const LinearLoader = () => {
  const loading = useAppSelector((state) => state.linearLoader.loading);

  if (loading) return <LinearProgress sx={{ zIndex: 10000 }} />;
  return <Box height={4} bgcolor={theme.palette.primary.dark} />;
};

export default LinearLoader;
