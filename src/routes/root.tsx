import PositionedSnackbar from 'components/PositionedSnackbar';
import Navbar from 'components/Navbar';

import { Outlet } from 'react-router-dom';
import LinearLoader from 'components/LinearLoader';

export default function Root() {
  return (
    <>
      <LinearLoader />
      <PositionedSnackbar />
      <Navbar />
      <Outlet />
    </>
  );
}
