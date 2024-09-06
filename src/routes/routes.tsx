import Root from './root';
import ErrorPage from './error/error-page';
import Home from './Home';

export const routesLoggedOut = ['objetivo', 'escolas', 'contato'];
export const routesLoggedIn = {
  isAdm: ['criar-post', 'criar-tag', 'contato'],
  isNotAdm: routesLoggedOut,
};

export const homeRoute = {
  path: '',
  element: <Home />,
  tag: 'Home',
};

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      homeRoute,
      {
        path: 'objetivo',
        element: <>Objetivo</>,
        tag: 'Qual é o Objetivo',
      },
      {
        path: 'escolas',
        element: <>Escolas de Filosofia</>,
        tag: 'Escolas de Filosofia',
      },
      {
        path: 'criar-post',
        element: <>Criar post</>,
        tag: 'Criar Post',
      },
      {
        path: 'criar-tag',
        element: <>Criar tag</>,
        tag: 'Criar Tag',
      },
      {
        path: 'contato',
        element: <>Contato</>,
        tag: 'Contato',
      },
    ],
  },
];
