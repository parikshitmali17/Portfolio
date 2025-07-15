
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';

const pages = ["Home",'About', 'Work', 'Contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (page) => {
    handleCloseNavMenu();
    switch (page) {
      case 'Home':
        navigate('/');
        break;
      case 'About':
        navigate('/About');
        break;
      case 'Work':
        navigate('/work');
        break;
      case 'Contacts':
        navigate('/Contacts'); // Optional: Add this route in App.js later
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="static" color='grey' style={{ paddingTop: "5px", backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <AirplayOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
        

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              // color="inherit"
              sx={{ color: 'white' }} // 
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
  key={page}
  onClick={() => handleNavigation(page)}
  sx={{
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#222',
    },
  }}
>
  <Typography textAlign="center" sx={{ color: 'white' }}>
    {page}
  </Typography>
</MenuItem>

              ))}
            </Menu>
          </Box>

          {/* Desktop Logo */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            LOGO
          </Typography>

          {/* Desktop Navigation Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Profile Avatar */}
          <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../Images/PASSPORT SIZE.jpg" />
              </IconButton>
           {/* open setting in Profile icons */}
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
