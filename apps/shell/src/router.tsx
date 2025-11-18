import { createBrowserRouter } from 'react-router';
import App from './app/app';

export default createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/test',
        element: <div>Test</div>,
      },
    ],
  },
]);
