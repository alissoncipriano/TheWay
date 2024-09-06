import { Link, useRouteError } from 'react-router-dom';

import Page from 'components/Page';
import { Typography } from '@mui/material';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Page>
      <Typography color='#FFF' fontFamily='Poppins' fontWeight={600}>
        <i>{error.statusText || error.message}</i>
      </Typography>

      <Link to='/'>
        <Typography color='#FFF' fontFamily='Poppins'>
          Voltar ao início
        </Typography>
      </Link>
    </Page>
  );

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
