import Root from './root';
import ErrorPage from './error/error-page';
import Home from './Home';
import Login from 'components/LoginModal';

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        tag: 'Home',
      },
      {
        path: 'objetivo',
        element: <>Objetivo</>,
        tag: 'Qual é o Objetivo',
      },
      {
        path: 'posts',
        element: <>Posts Recentes</>,
        tag: 'Posts Recentes',
      },
      {
        path: 'escolas',
        element: <>Escolas de Filosofia</>,
        tag: 'Escolas de Filosofia',
      },
      {
        path: 'contato',
        element: <>Contato</>,
        tag: 'Contato',
      },
    ],
  },
];
