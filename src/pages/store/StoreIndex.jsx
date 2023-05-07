import { Outlet } from 'react-router-dom';
import MenuAppBar from '../../Components/AppBar/MenuAppBar';

const StoreIndex = () => {
  return (
    <MenuAppBar>
      <Outlet />
    </MenuAppBar>
  );
};

export default StoreIndex;
