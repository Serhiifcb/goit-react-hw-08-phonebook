import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useNavigate } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import css from "./AppBarResponsive.module.css"

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <ImportContactsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
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
            PHONEBOOK
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem onClick={() => { navigate("/"); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">Home</Typography>
              </MenuItem>
              {isLoggedIn && (
              <MenuItem onClick={() => { navigate("/contacts"); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">Contacts</Typography>
              </MenuItem>
              )}
              {/* ))} */}
            </Menu>
          </Box>
          <Box sx={{alignItems: 'center', display: 'flex'}}>
            <ImportContactsIcon sx={{display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontSize: 10,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PHONEBOOK
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            <Button
                onClick={() => {navigate("/")}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
            </Button>
            {isLoggedIn && (
              <Button
                onClick={() => {navigate("/contacts")}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contacts
              </Button>
            )}
          </Box>

          <Box className={css.userAppAuth}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
      <ToastContainer autoClose={3000}/>
    </AppBar>
  );
}
export default ResponsiveAppBar;
