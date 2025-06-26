import { PATH } from './constants/path';
import { createBrowserRouter } from 'react-router';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
  },
]);

export default router;
