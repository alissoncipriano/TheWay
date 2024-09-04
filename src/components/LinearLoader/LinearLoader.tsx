import LinearProgress from '@mui/material/LinearProgress';
import { useAppSelector } from 'store/hooks';

const LinearLoader = () => {
  const loading = useAppSelector((state) => state.linearLoader.loading);

  if (loading) return <LinearProgress />;
  return <></>;
};

export default LinearLoader;
