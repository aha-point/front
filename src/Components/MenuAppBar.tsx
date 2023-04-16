import React, { ReactNode, useEffect } from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Theme from '../styles/theme';
// import { useTheme } from '@emotion/react';
import { useTheme, Theme } from '@mui/material/styles';
interface MenuAppBarProps {
  children: ReactNode;
}
const StyledAppBar = styled(AppBar)({
  //   backgroundColor: '#2196f3',
});

const StyledMenuItem = styled(MenuItem)({
  '&:hover': {
    backgroundColor: '#2196f3',
    color: 'white',
  },
});

const MenuAppBar = ({ children }: MenuAppBarProps) => {
  const theme: Theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    console.log(theme, 'theme');
  }, [theme]);
  return (
    <div>
      <div>
        <AppBar elevation={0} position="static">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginLeft: 16 }}>AhA Point</span>
            </div>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{ color: theme.palette.common.white }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={handleClose}>Profile</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>My account</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </div>
  );
};

export default MenuAppBar;
