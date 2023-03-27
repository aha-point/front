import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { SignupStore } from './pages/SignupStore';
import User from './pages/User';
import StoreUser from './pages/StoreUser';
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
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signupStore',
    element: <SignupStore />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/storeuser',
    element: <StoreUser />,
  },
]);
export default router;
