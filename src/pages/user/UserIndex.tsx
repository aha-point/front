import { Outlet } from 'react-router-dom';
import MenuAppBar from '../../Components/AppBar/MenuAppBar';

const UserIndex = () => {
  return (
    <MenuAppBar>
      <Outlet />
    </MenuAppBar>
  );
};

export default UserIndex;
