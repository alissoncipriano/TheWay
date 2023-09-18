import Page from 'components/Page';

import { theme } from 'theme/theme';

const Home = () => {
  return (
    <Page
      boxProps={{
        bgcolor: theme.palette.primary.dark,
      }}
    >
      Home
    </Page>
  );
};

export default Home;
