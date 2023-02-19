import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Signin } from './pages/Signin';
import { SIngup } from './pages/SIngup';
import { SIngupStore } from './pages/SIngupStore';
const router = createBrowserRouter([
  {
    path: '*',
    element: <div>not found</div>,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <SIngup />,
  },
  {
    path: '/signupStore',
    element: <SIngupStore />,
  },
]);
export default router;
