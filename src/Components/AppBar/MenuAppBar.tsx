import React, { ReactNode, useEffect } from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
// import Theme from '../styles/theme';
// import { useTheme } from '@emotion/react';
import { useTheme, Theme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
interface MenuAppBarProps {
  children: ReactNode;
}

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
  const navigate = useNavigate();
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const goToSettingPage = () => {
    navigate('/storesetting');
  };
  useEffect(() => {
    console.log(theme, 'theme');
  }, [theme]);
  return (
    <div>
      <div>
        <AppBar elevation={0} position="static">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* <div style={{ flexGrow: 1 }}>
              <span style={{ color: 'white', fontWeight: 'bold', marginLeft: 16 }}>AhA Point</span>
            </div> */}

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
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
                <StyledMenuItem onClick={goToSettingPage}>My account</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </div>
  );
};

export default MenuAppBar;
