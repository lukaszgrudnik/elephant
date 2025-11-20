import { createBrowserRouter } from 'react-router';
import App from './app/app';
import { lazy, Suspense } from 'react';

const Creator = lazy(
  () => import('creator/Creator'),
);

export default createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/creator',
        element: (
          <Suspense>
            <Creator />
          </Suspense>
        ),
      },
    ],
  },
]);
