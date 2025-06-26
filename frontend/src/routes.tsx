import { PATH } from './constants/path';
import { createBrowserRouter } from 'react-router';
import App from './App.tsx';
import Blogs from './pages/Blogs.tsx';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
  },
  {
    path: PATH.BLOGS,
    element: <Blogs />,
  },
]);

export default router;
