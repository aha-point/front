import { createBrowserRouter } from 'react-router-dom';
// import App from './App';
import Login, { rootLoader } from './pages/Login';
import SignupUser from './pages/user/SignupUser';
import SignupStore from './pages/store/SignupStore';
import User from './pages/user/User';
import SearchStore from './pages/user/SearchStore';
import StoreDetail from './pages/user/StoreDetail';
import UsePoint from './pages/store/UsePoint';
import AccumulatedPointList from './pages/store/AccumulatedPointList';
import UsePointResult from './pages/store/UsePointResult';
import NotFound from './pages/NotFound';
import StoreAccount from './pages/store/StoreAccount';
import SearchUser from './pages/store/searchUser';
import StoreIndex from './pages/store/StoreIndex';
import UserIndex from './pages/user/UserIndex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFound />,
    children: [],
  },
  {
    path: '/store',
    element: <StoreIndex />,
    loader: rootLoader,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <AccumulatedPointList />,
      },
      {
        path: 'signup',
        element: <SignupStore />,
      },
      {
        path: 'searchuser',
        element: <SearchUser />,
      },
      { path: 'usepoint', element: <UsePoint /> },
      { path: 'usepointresult', element: <UsePointResult /> },
      { path: 'account', element: <StoreAccount /> },
    ],
  },
  {
    path: '/user',
    element: <UserIndex />,
    loader: rootLoader,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <User /> },
      { path: 'signup', element: <SignupUser /> },
      {
        path: 'searchstore',
        element: <SearchStore />,
      },
      {
        path: 'storedetail/:storeId',
        element: <StoreDetail />,
      },
    ],
  },
]);
export default router;
