import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/user/Login';
import { Signup } from './pages/user/Signup';
import { SignupStore } from './pages/store/SignupStore';
import User from './pages/user/User';
import SearchStore from './pages/user/SearchStore';
import Detail from './pages/store/Detail';
import UsePoint from './pages/store/UsePoint';
import AccumulatedPointList from './pages/store/AccumulatedPointList';
import UsePointResult from './pages/store/UsePointResult';
import NotFound from './pages/NotFound';
import StoreSetting from './pages/store/StoreSetting';
const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/notfound',
    element: <NotFound />,
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
    path: '/accumulatedPointList',
    element: <AccumulatedPointList />,
  },
  {
    path: '/searchstore',
    element: <SearchStore />,
  },
  {
    path: '/detail/:detailId',
    element: <Detail />,
  },
  { path: '/usePoint', element: <UsePoint /> },
  { path: '/usePointResult', element: <UsePointResult /> },
  { path: '/storesetting', element: <StoreSetting /> },
]);
export default router;
